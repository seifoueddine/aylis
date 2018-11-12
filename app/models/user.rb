class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,:confirmable

  has_attached_file :image , :styles => { :medium => "300x300#"}, default_url: ->(attachment) { ActionController::Base.helpers.asset_path('default-profile.jpg') }
             
     # ActionController::Base.helpers.asset_path('default-profile.jpg')
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]


  has_many :useradds
  has_many :users , through: :useradds
  has_many :sales
  has_many :banks
  #before_save :random_id



  SIDE = [['Gauche','Gauche'],['Droite','Droite']]
  SEXE = [['Femme','Femme'],['Homme','Homme']]

=begin

  if @userleft.present? and @userright.present?
    self.points += 100
    self.save!
  end
=end



  #def random_id
   # self.randomID = rand(1256487...52547895234)
   # self.points = 0
  #end

end
