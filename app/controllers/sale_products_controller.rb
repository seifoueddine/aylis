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

    redirect_to sale_path(sale_params[:sale_id])
  end

  def destroy
    @pro = SaleProduct.find(params[:product_id])

    @pro.destroy
    respond_to do |format|
      format.html { redirect_to sale_url(params[:id]), notice: 'Products was successfully destroyed.' }
      format.json { head :no_content }
    end
  end



  private

  def sale_params
    params.require(:sale_product).permit(:quantity, :product_id,:sale_id)
  end


end
