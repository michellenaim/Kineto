json.set! @list.movie_id do
    json.extract @list.movie, :id, :title, :description, :year, :rating, :runtime
    json.movieURL url_for(@list.movie.url) if @list.movie.url.attached?
    json.photoURL url_for(@list.movie.photo) if @list.movie.photo.attached?
end