class SendController < ApplicationController
  before_action :set_send , only: [:sell]
  before_action :authenticate_user!


  def index
    @sales = Sale.where(env: true ,user_id: current_user.id)
  end

  def sell
    @s = @sal
    @s.env = true
    p = @s.total_price
    @current = User.find current_user.id
    pts = @current.points
    if p.to_i > pts.to_i
      redirect_to sales_path, :flash => { :error => "Vous avez pas assez de points pour faire cette commande." }
    else
    @current.points = pts - (p / 100)
    @current.save!
    @s.save!
    redirect_to '/send/index', notice: "Commande envoyé."
    end


  end

end



private
# Use callbacks to share common setup or constraints between actions.
def set_send
  @sal = Sale.find(params[:id])
end