class CreateUseradds < ActiveRecord::Migration[5.1]
  def change
    create_table :useradds do |t|
      t.integer :addedman
      t.integer :beenadded

      t.timestamps
    end
  end
end
