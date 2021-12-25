class CreateReacts < ActiveRecord::Migration[6.0]
  def change
    create_table :reacts do |t|
      t.string :title
      t.string :course

      t.timestamps
    end
  end
end
