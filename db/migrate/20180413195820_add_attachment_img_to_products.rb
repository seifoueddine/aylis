class AddAttachmentImgToProducts < ActiveRecord::Migration[5.1]
  def self.up
    change_table :products do |t|
      t.attachment :img
    end
  end

  def self.down
    remove_attachment :products, :img
  end
end
