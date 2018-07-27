class AddLevelToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :level1 , :integer
    add_column :users , :level2 , :integer
  end
end
