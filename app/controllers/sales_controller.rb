class SalesController < ApplicationController
  before_action :set_sale, only: [:show, :edit, :update, :destroy,:add_produit]

  # GET /sales
  # GET /sales.json
  def index
    @sales = Sale.all
  end

  # GET /sales/1
  # GET /sales/1.json
  def show
    @ven_pros = @sale.sale_products.order(:quantity)
    @products = Product.paginate(page: params[:page], per_page: 5)
  end

  # GET /sales/new
  def new
    @sale = Sale.new
    get_product

  end

  # GET /sales/1/edit
  def edit
    get_product
  end

  # POST /sales
  # POST /sales.json
  def create
    @sale = Sale.new(sale_params)
    @sale.total_price = 0;

    params[:products][:id].each do |product|
      if !product.empty?
       # @sale.sale_products(:product_id => product)
       @product = Product.find(product)
       @sale.sale_products.build(product_id: product, price: @product.price, quantity: 1)
      end
    end
    respond_to do |format|
      if @sale.save
        format.html { redirect_to @sale, notice: 'Sale was successfully created.' }
        format.json { render :show, status: :created, location: @sale }
      else
        format.html { render :new }
        format.json { render json: @sale.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sales/1
  # PATCH/PUT /sales/1.json
  def update
    respond_to do |format|
      if @sale.update(sale_params)
        @sale.products = []
        params[:products][:id].each do |product|
          if !product.empty?
            @sale.products << Product.find(product)
          end
        end
        format.html { redirect_to @sale, notice: 'Sale was successfully updated.' }
        format.json { render :show, status: :ok, location: @sale }
      else
        format.html { render :edit }
        format.json { render json: @sale.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sales/1
  # DELETE /sales/1.json
  def destroy
    @sale.destroy
    respond_to do |format|
      format.html { redirect_to sales_url, notice: 'Sale was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  def add_produit
    @pro = SaleProduct.new
    @pro.sale = @sale
    @product = Product.find(params[:product_id])
    @pro.product_id = @product.id
   # @sal = @pro.product
    @pro.quantity = params[:quantity]
    @pro.price = @product.price
    x = @pro.price
    v = @pro.quantity
    a = @sale.total_price
    if a == nil || a == 0
      a=0
      f = a + x * v
    else
      f = a + x * v
    end
    @sale.total_price = f

    @pro.save!


    if @pro.save
      flash[:notice] = 'Vendre enregistré avec succes.'
      redirect_to :action => :show, :id => params[:id]
    else
      flash[:error] = "Une erreur s'est produite."
      redirect_to :action => :show, :id => params[:id]
    end
    end


  def get_product
    @all_products = Product.all
    @sale_product = @sale.sale_products.build
  end

  def full_name2
    "#{name} #{price}"
  end




  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sale
      @sale = Sale.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sale_params
      params.require(:sale).permit(:date, :total_price, :contact_name)
    end
end
