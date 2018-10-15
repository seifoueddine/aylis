class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy,:reset_password,:active]
  before_action :authenticate_user!


  def index
  @userss = User.all
    #####################
  @myteam = User.where(addBY: current_user.randomID)


  tab = []
  tab2 = []
  tab2 << @ownuser << @usertoshowl << @usertoshowr << @usertoshowll << @usertoshowlr << @usertoshowrl << @usertoshowrr << @usertoshowlll << @usertoshowllr << @usertoshowlrl << @usertoshowlrr << @usertoshowrll << @usertoshowrlr << @usertoshowrrl << @usertoshowrrr
  tab = tab2.compact
  @userlist = tab
  end

  def show
      tab = []

      @userleftright = Useradd.where(addedman: current_user.id)
      @total = Useradd.where(addedman: @user.id).count
      @totalleft = Useradd.where(side: 'Gauche', addedman: @user.id).count
      @totalright = Useradd.where(side: 'Droite', addedman: @user.id).count

#first line
 ##################

      ## the first in the left
      @userleft = @userleftright.where(side: 'Gauche', beneath: @user.randomID)
      if @userleft[0]
      idl = @userleft[0].beenadded
      @usertoshowl = User.find_by_id idl
      end


      ## the first in the right
      @userright = @userleftright.where(side: 'Droite', beneath: @user.randomID)
      if @userright[0]
      idl = @userright[0].beenadded
      @usertoshowr = User.find_by_id idl
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
    end

#
# RIGHT
    @userleftright = Useradd.where(side: 'Droite', beneath: @usertoshowl.randomID)

    if @userleftright[0]
      idl = @userleftright[0].beenadded
      @usertoshowlr = User.find_by_id idl
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
    end

#
# RIGHT
    @userrightright = Useradd.where(side: 'Droite', beneath: @usertoshowr.randomID)

    if @userrightright[0]
      idl = @userrightright[0].beenadded
      @usertoshowrr = User.find_by_id idl
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
                end


              # RIGHT
                @userleftleftright = Useradd.where(side: 'Droite', beneath: @usertoshowll.randomID)

                if @userleftleftright[0]
                  idl = @userleftleftright[0].beenadded
                  @usertoshowllr = User.find_by_id idl
                end
              end
        #RIGHT

              # LEFT
              if @usertoshowlr
                @userleftrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowlr.randomID)

                if @userleftrightleft[0]
                  idl = @userleftrightleft[0].beenadded
                  @usertoshowlrl = User.find_by_id idl
                end

                #
                # RIGHT
                @userleftrightright = Useradd.where(side: 'Droite', beneath: @usertoshowlr.randomID)

                if @userleftrightright[0]
                  idl = @userleftrightright[0].beenadded
                  @usertoshowlrr = User.find_by_id idl
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
                      end

                      #
                      # RIGHT
                      @userrightleftright = Useradd.where(side: 'Droite', beneath: @usertoshowrl.randomID)

                      if @userrightleftright[0]
                        idl = @userrightleftright[0].beenadded
                        @usertoshowrlr = User.find_by_id idl
                      end
                    end


        # RIGHT


             #LEFT
            if @usertoshowrr
              @userrightrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowrr.randomID)

              if @userrightrightleft[0]
                idl = @userrightrightleft[0].beenadded
                @usertoshowrrl = User.find_by_id idl
              end

              #
              # RIGHT
              @userrightrightright = Useradd.where(side: 'Droite', beneath: @usertoshowrr.randomID)

              if @userrightrightright[0]
                idl = @userrightrightright[0].beenadded
                @usertoshowrrr = User.find_by_id idl
              end
            end


    left = []
    right = []

    left  << @usertoshowl << @usertoshowll << @usertoshowlr  << @usertoshowlll << @usertoshowllr << @usertoshowlrl << @usertoshowlrr
    right << @usertoshowr << @usertoshowrl << @usertoshowrr  << @usertoshowrll << @usertoshowrlr << @usertoshowrrl << @usertoshowrrr

    @l= left.compact.count
    @r= right.compact.count

  end

  def new
  @user = User.new
  end

  def edit
  end

  def reset_password
  end

  def active
  @userleftright = Useradd.where(addedman: current_user.id)
  @ownuser = User.find_by_id current_user.id
    @userleft = @userleftright.where(side: 'Gauche', beneath: current_user.randomID)
    if @userleft[0]
      idl = @userleft[0].beenadded
      @usertoshowl = User.find_by_id idl
    end
    @userright = @userleftright.where(side: 'Droite', beneath: current_user.randomID)
    if @userright[0]
      idl = @userright[0].beenadded
      @usertoshowr = User.find_by_id idl
    end
    if @usertoshowl
      @userleftleft = Useradd.where(side: 'Gauche', beneath: @usertoshowl.randomID)

      if @userleftleft[0]
        idl = @userleftleft[0].beenadded
        @usertoshowll = User.find_by_id idl
      end

#
# RIGHT
      @userleftright = Useradd.where(side: 'Droite', beneath: @usertoshowl.randomID)

      if @userleftright[0]
        idl = @userleftright[0].beenadded
        @usertoshowlr = User.find_by_id idl
      end
    end
    if @usertoshowr
      @userrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowr.randomID)

      if @userrightleft[0]
        idl = @userrightleft[0].beenadded
        @usertoshowrl = User.find_by_id idl
      end

#
# RIGHT
      @userrightright = Useradd.where(side: 'Droite', beneath: @usertoshowr.randomID)

      if @userrightright[0]
        idl = @userrightright[0].beenadded
        @usertoshowrr = User.find_by_id idl
      end
    end
    if @usertoshowll
      @userleftleftleft = Useradd.where(side: 'Gauche', beneath: @usertoshowll.randomID)

      if @userleftleftleft[0]
        idl = @userleftleftleft[0].beenadded
        @usertoshowlll = User.find_by_id idl
      end


      # RIGHT
      @userleftleftright = Useradd.where(side: 'Droite', beneath: @usertoshowll.randomID)

      if @userleftleftright[0]
        idl = @userleftleftright[0].beenadded
        @usertoshowllr = User.find_by_id idl
      end
    end
    if @usertoshowlr
      @userleftrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowlr.randomID)

      if @userleftrightleft[0]
        idl = @userleftrightleft[0].beenadded
        @usertoshowlrl = User.find_by_id idl
      end

      #
      # RIGHT
      @userleftrightright = Useradd.where(side: 'Droite', beneath: @usertoshowlr.randomID)

      if @userleftrightright[0]
        idl = @userleftrightright[0].beenadded
        @usertoshowlrr = User.find_by_id idl
      end
    end
    if @usertoshowrl
      @userrightleftleft = Useradd.where(side: 'Gauche', beneath: @usertoshowrl.randomID)

      if @userrightleftleft[0]
        idl = @userrightleftleft[0].beenadded
        @usertoshowrll = User.find_by_id idl
      end

      #
      # RIGHT
      @userrightleftright = Useradd.where(side: 'Droite', beneath: @usertoshowrl.randomID)

      if @userrightleftright[0]
        idl = @userrightleftright[0].beenadded
        @usertoshowrlr = User.find_by_id idl
      end
    end
    if @usertoshowrr
      @userrightrightleft = Useradd.where(side: 'Gauche', beneath: @usertoshowrr.randomID)

      if @userrightrightleft[0]
        idl = @userrightrightleft[0].beenadded
        @usertoshowrrl = User.find_by_id idl
      end

      #
      # RIGHT
      @userrightrightright = Useradd.where(side: 'Droite', beneath: @usertoshowrr.randomID)

      if @userrightrightright[0]
        idl = @userrightrightright[0].beenadded
        @usertoshowrrr = User.find_by_id idl
      end
    end
    tab = []
    tab2 = []
    tab2 << @ownuser << @usertoshowl << @usertoshowr << @usertoshowll << @usertoshowlr << @usertoshowrl << @usertoshowrr << @usertoshowlll << @usertoshowllr << @usertoshowlrl << @usertoshowlrr << @usertoshowrll << @usertoshowrlr << @usertoshowrrl << @usertoshowrrr
    tab = tab2.compact
    @userlist = tab




  end

  def activations

    @userside = User.find_by_randomID user_params2[:beneath]


    if ((@userside.left == true) && (user_params2[:side] == 'Gauche'))
      redirect_to "/users/active/#{params[:id]}", notice: 'La position Gauche est prise déja.'

    elsif ((@userside.right == true) && (user_params2[:side] == 'Droite'))
      redirect_to "/users/active/#{params[:id]}", notice: 'La position Droite est prise déja.'

    else
      @useractive = Useradd.find_by_beenadded params[:id]
      @useractive.side = user_params2[:side]
      @useractive.beneath = user_params2[:beneath]
      @useractive.save!
      if user_params2[:side] == 'Droite'
        @userside.right = true
        @userside.save!
      else
        @userside.right = true
        @userside.save!
      end
      @user = User.find_by_id params[:id]
      @user.points += 50
      @user.activate = 1
      @user.save!
      @own = current_user
      @own.number_activation -= 1
      @own.points += 200
      @own.save!
      if current_user.level1.nil?
        Useradd.add_point(current_user)
      end
        Useradd.add_point2(current_user)
      redirect_to users_path, notice: 'Activation bien faite.'
     end
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @user.update(user_params)

        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        if params[:user][:password]
          format.html { render :reset_password }
        else
          format.html { render :edit }
        end
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    id = @user.id
    @desuser = Useradd.find_by_beenadded id
    @desuser.destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'user was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name,:last_name, :email, :password,:password_confirmation,:addpartner,:addBY,:image,:beneath,:phone,:activate,:side,:beneath,:number_activation,:sexe,:date)
  end

  def user_params2
    params.permit(:beneath,:side)
  end


end
