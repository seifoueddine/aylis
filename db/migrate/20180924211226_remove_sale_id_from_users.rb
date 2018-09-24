class RemoveSaleIdFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :sale_id, :integer
  end
end
