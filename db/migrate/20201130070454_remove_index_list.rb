class RemoveIndexList < ActiveRecord::Migration[5.2]
  def change
    remove_index :lists, column: [:user_id, :movie_id]
  end
end
