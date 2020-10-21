json.extract! @list, :id, :user_id
json.set! @list.movie_id do
    json.extract @list.movie, :id, :title, :description, :year, :rating, :runtime
    json.url url_for(@list.movie.url)
    json.photo url_for(@list.movie.photo)
end