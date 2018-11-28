class ConfirmationController < ApplicationController
  def index
  end
  def ID

    if User.exists?(randomID: params[:addBY])

      redirect_to new_user_registration_path(addBY: params[:addBY])

    else
      redirect_to confirmation_index_path , alert: "Vous avez mit un ID d'un partenaire non existant."
    end

  end
end
