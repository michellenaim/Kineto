json.extract! movie, :id, :title, :description, :year, :rating, :runtime
json.photoURL url_for(movie.photo) if movie.photo.attached?
json.movieURL url_for(movie.url) if movie.url.attached?


