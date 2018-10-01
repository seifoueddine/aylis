class CreateBanks < ActiveRecord::Migration[5.1]
  def change
    create_table :banks do |t|
      t.datetime :date
      t.integer :points
      t.integer :user_id

      t.timestamps
    end
  end
end
