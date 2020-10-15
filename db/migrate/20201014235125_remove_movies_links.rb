class RemoveMoviesLinks < ActiveRecord::Migration[5.2]
  def change
    remove_column :movies, :thumbnail_url
    remove_column :movies, :movie_url
  end
end
