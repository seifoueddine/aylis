class AddReadToSales < ActiveRecord::Migration[5.1]
  def change
    add_column :sales , :read , :boolean
  end
end
