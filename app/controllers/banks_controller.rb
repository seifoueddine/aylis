class BanksController < ApplicationController
  before_action :set_bank, only: [:show, :edit]
  before_action :authenticate_user!
  # GET /banks
  # GET /banks.json
  def index
    @banks = Bank.where(user_id: current_user.id, activation: nil).order(date: :desc)
    @banks2 = Bank.where(user_id: current_user.id , points: nil).order(date: :desc)
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
    e= bank_params[:points]
    @user.points -= bank_params[:points].to_i
    @user.save
    respond_to do |format|
      if @bank.save
        format.html { redirect_to banks_path, notice: 'Vos points ont bien envoyés.' }

      else
        format.html { render :new }
        format.json { render json: @bank.errors, status: :unprocessable_entity }
      end
    end
  end

  def send_activation
    @bank = Bank.new
  end

  def activations
    @bank = Bank.new(bank_param)
    @bank.user_id = current_user.id
    @bank.date = Date.today
    @re_user = User.find_by_randomID bank_param[:receiver_id]
    if @re_user
    @re_user.number_activation += bank_param[:activation].to_i
    @re_user.save!
    @tr_user = User.find_by_id current_user.id
    @tr_user.number_activation -= bank_param[:activation].to_i
    @tr_user.save!
    respond_to do |format|
      if @bank.save
        format.html { redirect_to banks_path, notice: 'Activations bien envoyé.' }
      else
        format.html { render :new }
        format.json { render json: @bank.errors, status: :unprocessable_entity }
      end
    end
    else
      redirect_to banks_path,  notice: "Partenaire non trouver ."
    end

  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bank
      @bank = Bank.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bank_params
      params.require(:bank).permit(:date, :points, :user_id,:receiver_id,:activation)
    end

  def bank_param
    params.permit(:date, :points, :user_id,:receiver_id,:activation)
  end



end
