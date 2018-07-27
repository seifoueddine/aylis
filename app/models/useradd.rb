class Useradd < ApplicationRecord


belongs_to :user , optional: true


def self.add_point(user)

  @userleftright = Useradd.where(addedman: user.id)
  @userleft = @userleftright.where(side: 'Gauche', beneath: user.randomID)
  if @userleft[0]
    idl = @userleft[0].beenadded
    @usertoshowl = User.find_by_id idl
  end
  @userrigh = @userleftright.where(side: 'Droite', beneath: user.randomID)

  if @userrigh[0]
    idl = @userrigh[0].beenadded
    @usertoshowr = User.find_by_id idl
  end

  if @usertoshowr and  @usertoshowl
    user.points += 100
    user.level1 = 1
    user.save!
  end




end


def self.add_point2(user)


  @userleftright = Useradd.where(addedman: user.id)

#first line
##################

## the first in the left
  @userleft = @userleftright.where(side: 'Gauche', beneath: user.randomID)
  if @userleft[0]
    idl = @userleft[0].beenadded
    @usertoshowl = User.find_by_id idl
  end



## the first in the right
  @userright = @userleftright.where(side: 'Droite', beneath: user.randomID)
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



  right = []
  left = []
  left  << @usertoshowll << @usertoshowlr  << @usertoshowlll << @usertoshowllr << @usertoshowlrl << @usertoshowlrr
  right << @usertoshowrl << @usertoshowrr  << @usertoshowrll << @usertoshowrlr << @usertoshowrrl << @usertoshowrrr
  if (left.compact.count == right.compact.count)
    num0 = left.compact.count
  end

  if (left.compact.count == right.compact.count) && (num0 != user.level2)
    num = left.compact.count
  end

  case num
  when 1    
    user.points += 300
    user.level2 = num
    user.save!
  when 2    
    user.points += 300
    user.level2 = num
    user.save!
  when 3    
    user.points += 300
    user.level2 = num
    user.save!
  when 4    
    user.points += 300
    user.level2 = num
    user.save!
  when 5
    user.points += 300
    user.ivoucher = num
    user.save!
  when 6    
      user.points += 300
      user.level2 = num
      user.save!
  when 7    
    user.points += 300
    user.level2 = num
    user.save!
  when 8    
    user.points += 300
    user.level2 = num
    user.save!
  when 9    
    user.points += 300
    user.level2 = num
    user.save!
  when 10
    user.points += 300
    user.ivoucher = num
    user.save!
  when 11    
      user.points += 300
      user.level2 = num
      user.save!
  when 12    
    user.points += 300
    user.level2 = num
    user.save!
  when 13    
    user.points += 300
    user.level2 = num
    user.save!
  when 14    
    user.points += 300
    user.level2 = num
    user.save!
  when 15
    user.points += 300
    user.ivoucher = num
    user.save!
  when 16    
      user.points += 300
      user.level2 = num
      user.save!
  when 17    
    user.points += 300
    user.level2 = num
    user.save!
  when 18    
    user.points += 300
    user.level2 = num
    user.save!
  when 19    
    user.points += 300
    user.level2 = num
    user.save!
  when 20
    user.points += 300
    user.ivoucher = num
    user.save!

  when 21    
      user.points += 300
      user.level2 = num
      user.save!
  when 22    
    user.points += 300
    user.level2 = num
    user.save!
  else

  end


end


end
