class AddFieldToSalesUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :sales , :user_id , :integer
    add_column :users , :sale_id , :integer
  end
end
