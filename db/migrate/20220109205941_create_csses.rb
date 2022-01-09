class CreateCsses < ActiveRecord::Migration[6.0]
  def change
    create_table :csses do |t|
      t.string :name
      t.string :course
      t.string :subcategory

      t.timestamps
    end
  end
end
