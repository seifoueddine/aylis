class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :points , :integer
    add_column :users, :side , :string
    add_column :users, :randomID , :bigint



  end
end
