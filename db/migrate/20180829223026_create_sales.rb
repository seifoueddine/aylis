class CreateSales < ActiveRecord::Migration[5.1]
  def change
    create_table :sales do |t|
      t.date :date
      t.float :total_price
      t.string :contact_name

      t.timestamps
    end
  end
end
