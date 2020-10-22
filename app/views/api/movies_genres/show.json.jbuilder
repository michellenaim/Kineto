json.moviesgenre do
    json.extract! @moviesgenre, :movie_id, :genre_id
end