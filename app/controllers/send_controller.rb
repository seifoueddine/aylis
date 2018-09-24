class SendController < ApplicationController
  before_action :set_send , only: [:sell]
  before_action :authenticate_user!


  def index
    @sales = Sale.where(env: true ,user_id: current_user.id)
  end

  def sell
    @s = @sal
  @s.env = true
    @s.save!
    redirect_to '/send/index', notice: 'Commande envoyé.'


  end

end



private
# Use callbacks to share common setup or constraints between actions.
def set_send
  @sal = Sale.find(params[:id])
end