class AddBeneathToUseradds < ActiveRecord::Migration[5.1]
  def change
    add_column :users , :beneath , :bigint

  end
end
