class AddMoreCulumnsTo < ActiveRecord::Migration[5.1]
  def change

    add_column :users , :addBY , :bigint
    add_column :users , :addpartner , :bigint

  end
end
