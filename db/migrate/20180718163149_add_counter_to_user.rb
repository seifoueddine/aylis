class AddCounterToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :month_counter , :integer
  end
end
