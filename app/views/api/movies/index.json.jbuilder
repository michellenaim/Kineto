@movies.each do |movies|
    json.set! movie.id do
        json.partial! 'api/movies/movie', movie: movie
    end
end