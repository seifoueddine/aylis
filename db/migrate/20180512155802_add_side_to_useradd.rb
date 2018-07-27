class AddSideToUseradd < ActiveRecord::Migration[5.1]
  def change
    add_column :useradds, :side , :string

  end
end
