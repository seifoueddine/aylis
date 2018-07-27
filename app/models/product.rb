class Product < ApplicationRecord
  has_attached_file :img , :styles => { :small => "150x150>" }

  validates_attachment_content_type :img, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
