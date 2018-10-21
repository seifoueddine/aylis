class ChangeRandomIdToString < ActiveRecord::Migration[5.1]
  def up
    change_column :banks, :receiver_id, :string
    change_column :useradds, :beneath, :string
    change_column :users, :randomID, :string
    change_column :users, :addBY, :string
    change_column :users, :addpartner, :string
    change_column :users, :beneath , :string
  end

  def down
    change_column :banks, :receiver_id, :bigint
    change_column :useradds, :beneath, :bigint
    change_column :users, :randomID, :bigint
    change_column :users, :addBY, :bigint
    change_column :users, :addpartner, :bigint
    change_column :users, :beneath , :bigint
  end
end
