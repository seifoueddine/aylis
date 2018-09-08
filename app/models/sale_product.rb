class SaleProduct < ApplicationRecord
  belongs_to :sale
  belongs_to :product



  def name_price
    "#{name} #{price}"
  end



end
