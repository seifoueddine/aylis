class AddBeneathToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :useradds , :beneath , :bigint
  end
end
