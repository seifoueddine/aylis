class AddNumActivationToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :number_activation , :integer
  end
end
