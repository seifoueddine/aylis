class AddAccountToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :account , :boolean
    add_column :users , :account2 , :boolean
  end
end
