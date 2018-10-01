class BanksController < ApplicationController
  before_action :set_bank, only: [:show, :edit, :update, :destroy]

  # GET /banks
  # GET /banks.json
  def index
    @banks = Bank.where(user_id: current_user.id)
  end

  # GET /banks/1
  # GET /banks/1.json
  def show
  end

  # GET /banks/new
  def new
    @bank = Bank.new
  end


  # POST /banks
  # POST /banks.json
  def create
    @bank = Bank.new(bank_params)
    @bank.user_id = current_user.id
    @bank.date = Date.today
    @user =User.find(current_user.id)
    @user.points -= bank_params[:points].to_i
    @user.save
    respond_to do |format|
      if @bank.save
        format.html { redirect_to banks_path, notice: 'points bien envoyé.' }

      else
        format.html { render :new }
        format.json { render json: @bank.errors, status: :unprocessable_entity }
      end
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bank
      @bank = Bank.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bank_params
      params.require(:bank).permit(:date, :points, :user_id)
    end
end
