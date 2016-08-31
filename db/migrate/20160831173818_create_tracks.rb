class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.integer :user_id, null: false
      t.text :description
      t.binary :audio_file, null: false
      t.text :image_url
      t.timestamps null: false
    end
    add_index :tracks, :user_id
  end
end
