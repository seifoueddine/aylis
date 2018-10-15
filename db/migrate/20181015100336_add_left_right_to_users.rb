class AddLeftRightToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :left , :boolean
    add_column :users , :right , :boolean
  end
end
