  # frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]
after_action :partner_id , only: :create
before_action :check_for_token, only: :create

  def partner_id
       parameter = devise_parameter_sanitizer.sanitize(:sign_up)
       values = parameter.values
       random_id = values[7]
       id= @user.id
       @user.randomID = "LH#{rand(0...100000)}"
       @user.points = 0
       @user.ivoucher = 0
       @user.number_activation = 0
       @useraa = User.find_by_randomID random_id
       @useradd = Useradd.new
       @useradd.addedman = @useraa.id
       @useradd.beenadded = id
       @user.save
       @useradd.save!

  end

  # GET /resource/sign_up
   #def new
   #  super
   #end

  # POST /resource
   def create
    super
   end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
  #
private


def after_inactive_sign_up_path_for(resource)
  new_user_session_path
end

def check_for_token
  parameter = devise_parameter_sanitizer.sanitize(:sign_up)
  values = parameter.values
  random_id = values[7]
  redirect_to "https://globlh.com/users/sign_in" , alert: "Vous avez mit un ID d'un partenaire non existant." unless User.exists?(randomID: random_id)
end
end
