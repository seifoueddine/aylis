class Sale < ApplicationRecord
  has_many :sale_products
  has_many :products, through: :sale_products
  belongs_to :user




end
