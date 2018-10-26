class SaleProductsController < ApplicationController


  def create
    @sale = Sale.find(sale_params[:sale_id])
    @item = @sale.sale_products.new(sale_params)

    @item.price = Product.find(sale_params[:product_id]).price
    x = @item.price
    v = @item.quantity
    a = @sale.total_price
    if a == nil || a == 0
      a=0
      f = a + x * v
    else
      f = a + x * v
    end
    @sale.total_price = f
    @sale.save

    @item.save

    redirect_to sale_path(sale_params[:sale_id]), notice: "Vous avez bien ajouté #{@item.quantity} #{Product.find(sale_params[:product_id]).name}"
  end

  def destroy
    @pro = SaleProduct.find(params[:product_id])
    p= @pro.price
    q = @pro.quantity
    id = @pro.sale_id
    @pro.destroy

    @sale = Sale.find id
    @sale.total_price -= p * q
    @sale.save!
    respond_to do |format|
      format.html { redirect_to sale_url(params[:id]), alert: "Produit a été supprimé." }
      format.json { head :no_content }
    end
  end


  def decrement
    @pro = SaleProduct.find(params[:product_id])
    @pro.decrement!(:quantity)
    p= @pro.price
    id = @pro.sale_id

    @sale = Sale.find id
    @sale.total_price -= p
    @sale.save!

    @pro.save!
    respond_to do |format|
      format.html { redirect_to sale_url(params[:id]), notice: 'La quantité a été réduite avec succès.' }
      format.json { head :no_content }
    end
  end

  def increment
    @pro = SaleProduct.find(params[:product_id])
    @pro.increment!(:quantity)
    p= @pro.price
    id = @pro.sale_id


    @sale = Sale.find id
    @sale.total_price += p
    @sale.save!

    @pro.save!
    respond_to do |format|
      format.html { redirect_to sale_url(params[:id]), notice: 'La quantité a été augmentée avec succès.' }
      format.json { head :no_content }
    end
  end




  private

  def sale_params
    params.require(:sale_product).permit(:quantity, :product_id,:sale_id)
  end


end
