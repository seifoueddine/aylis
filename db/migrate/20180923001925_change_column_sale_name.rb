class ChangeColumnSaleName < ActiveRecord::Migration[5.1]
  def change
    rename_column :sales, :send, :env
  end
end
