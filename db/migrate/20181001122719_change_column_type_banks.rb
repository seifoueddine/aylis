class ChangeColumnTypeBanks < ActiveRecord::Migration[5.1]
  def change
    change_column :banks, :receiver_id, :bigint
  end
end
