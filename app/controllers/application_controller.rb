class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  before_action :configure_devise, if: :devise_controller?

  def configure_devise
    devise_parameter_sanitizer.permit(:sign_up){|u|u.permit(:last_name,:first_name,:email,:address,:phone,:password,:password_confirmation,:side,:randomID,:addBY,:addpartner,:beneath,:sexe)}
  end

  def after_sign_in_path_for(resource)
    "/welcome/welcome"
  end

end
