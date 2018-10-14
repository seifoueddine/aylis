class Product < ApplicationRecord


  has_many :sale_products
  has_many :sales , through: :sale_products

  has_attached_file :img , :styles => { :small => "150x150>" }

  validates_attachment_content_type :img, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]



  CATEGORIES  = %w(Vetement Automobile)
  CATEGORIES2  = %w(Tout Vetement Automobile)

end
