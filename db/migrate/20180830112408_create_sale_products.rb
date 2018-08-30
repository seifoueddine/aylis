class CreateSaleProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :sale_products do |t|
      t.integer :product_id
      t.integer :sale_id
      t.float :price
      t.integer :quantity

      t.timestamps
    end
  end
end
