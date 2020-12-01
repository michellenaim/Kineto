@lists.each do |list|
    json.set! list.movie.id do
        json.extract! list.movie, :title, :description, :year, :rating, :runtime
        json.movieURL url_for(list.movie.url) if list.movie.url.attached?
        json.photoURL url_for(list.movie.photo) if list.movie.photo.attached?
        json.extract! list, :id, :user_id, :movie_id
    end
end