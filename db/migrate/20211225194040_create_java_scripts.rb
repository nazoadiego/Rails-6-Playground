class CreateJavaScripts < ActiveRecord::Migration[6.0]
  def change
    create_table :java_scripts do |t|
      t.string :title
      t.string :course

      t.timestamps
    end
  end
end
