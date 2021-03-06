class WelcomeController < ApplicationController
  before_action :set_user , only: [:index]
  before_action :authenticate_user!

  def welcome
  redirect_to "/welcome/#{current_user.id}"
  end


  def index
    women = 0
    men = 0
    @userleftright = Useradd.where(addedman: current_user.id)
    @totalleft = Useradd.where(side: 'Gauche', addedman: @user.id).count
    @totalright = Useradd.where(side: 'Droite', addedman: @user.id).count

#first line
##################

## the first in the left
    @userleft = @userleftright.where(side: 'Gauche', beneath: @user.randomID)
    if @userleft[0]
      idl = @userleft[0].beenadded
      @usertoshowl = User.find_by_id idl
      if @usertoshowl.sexe == "Femme"
        women += 1
      else
        men += 1
      end
    end



## the first in the right
    @userright = @userleftright.where(side: 'Droite', beneath: @user.randomID)
    if @userright[0]
      idl = @userright[0].beenadded
      @usertoshowr = User.find_by_id idl
      if @usertoshowr.sexe == "Femme"
        women += 1
      else
        men += 1
      end
    end

#second line
#####################


## the second in the left
#
# LEFT
    if @usertoshowl
      @userleftleft = Useradd.where(side: 'Gauche', beneath: @usertoshowl.randomID)

      if @userleftleft[0]
        idl = @userleftleft[0].beenadded
        @usertoshowll = User.find_by_id idl
        if @usertoshowll.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end

#
# RIGHT
      @userleftright = Useradd.where(side: 'Droite', beneath: @usertoshowl.randomID)

      if @userleftright[0]
        idl = @userleftright[0].beenadded
        @usertoshowlr = User.find_by_id idl
        if @usertoshowlr.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end
    end



## the second in the right
#
# LEFT
    if @usertoshowr
      @userrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowr.randomID)

      if @userrightleft[0]
        idl = @userrightleft[0].beenadded
        @usertoshowrl = User.find_by_id idl
        if @usertoshowrl.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end

#
# RIGHT
      @userrightright = Useradd.where(side: 'Droite', beneath: @usertoshowr.randomID)

      if @userrightright[0]
        idl = @userrightright[0].beenadded
        @usertoshowrr = User.find_by_id idl
        if @usertoshowrr.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end
    end



#Third line
#####################

## the third in the left

##LEFT
#LEFT
# LEFT
    if @usertoshowll
      @userleftleftleft = Useradd.where(side: 'Gauche', beneath: @usertoshowll.randomID)

      if @userleftleftleft[0]
        idl = @userleftleftleft[0].beenadded
        @usertoshowlll = User.find_by_id idl
        if @usertoshowlll.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end


      # RIGHT
      @userleftleftright = Useradd.where(side: 'Droite', beneath: @usertoshowll.randomID)

      if @userleftleftright[0]
        idl = @userleftleftright[0].beenadded
        @usertoshowllr = User.find_by_id idl
        if @usertoshowllr.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end
    end
#RIGHT

# LEFT
    if @usertoshowlr
      @userleftrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowlr.randomID)

      if @userleftrightleft[0]
        idl = @userleftrightleft[0].beenadded
        @usertoshowlrl = User.find_by_id idl
        if @usertoshowlrl.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end

      #
      # RIGHT
      @userleftrightright = Useradd.where(side: 'Droite', beneath: @usertoshowlr.randomID)

      if @userleftrightright[0]
        idl = @userleftrightright[0].beenadded
        @usertoshowlrr = User.find_by_id idl
        if @usertoshowlrr.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end
    end

##RIGHT
#LEFT
#LEFT
    if @usertoshowrl
      @userrightleftleft = Useradd.where(side: 'Gauche', beneath: @usertoshowrl.randomID)

      if @userrightleftleft[0]
        idl = @userrightleftleft[0].beenadded
        @usertoshowrll = User.find_by_id idl
        if @usertoshowrll.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end

      #
      # RIGHT
      @userrightleftright = Useradd.where(side: 'Droite', beneath: @usertoshowrl.randomID)

      if @userrightleftright[0]
        idl = @userrightleftright[0].beenadded
        @usertoshowrlr = User.find_by_id idl
        if @usertoshowrlr.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end
    end


# RIGHT


#LEFT
    if @usertoshowrr
      @userrightrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowrr.randomID)

      if @userrightrightleft[0]
        idl = @userrightrightleft[0].beenadded
        @usertoshowrrl = User.find_by_id idl
        if @usertoshowrrl.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end

      #
      # RIGHT
      @userrightrightright = Useradd.where(side: 'Droite', beneath: @usertoshowrr.randomID)

      if @userrightrightright[0]
        idl = @userrightrightright[0].beenadded
        @usertoshowrrr = User.find_by_id idl
        if @usertoshowrrr.sexe == "Femme"
          women += 1
        else
          men += 1
        end
      end
    end



    left = []
    right = []


    left  << @usertoshowl << @usertoshowll << @usertoshowlr  << @usertoshowlll << @usertoshowllr << @usertoshowlrl << @usertoshowlrr
    right << @usertoshowr << @usertoshowrl << @usertoshowrr  << @usertoshowrll << @usertoshowrlr << @usertoshowrrl << @usertoshowrrr

    @l= left.compact.count
    @r= right.compact.count

    @w = women
    @m = men

  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end


end
