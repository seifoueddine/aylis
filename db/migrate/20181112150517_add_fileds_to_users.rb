class AddFiledsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :city , :string
    add_column :users , :state , :string
    add_column :users , :country , :string
    add_column :users , :cpp , :string
    add_column :users , :bank_account , :string
    add_column :users , :delivery_address1 , :string
    add_column :users , :delivery_address2 , :string
    add_column :users , :delivery_address3 , :string
  end
end
