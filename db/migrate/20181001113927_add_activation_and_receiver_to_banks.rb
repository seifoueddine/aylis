class AddActivationAndReceiverToBanks < ActiveRecord::Migration[5.1]
  def change
    add_column :banks , :activation , :integer
    add_column :banks , :receiver_id , :integer
  end
end
