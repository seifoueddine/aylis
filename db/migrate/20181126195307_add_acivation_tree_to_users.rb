class AddAcivationTreeToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :treeactivation , :boolean
  end
end
