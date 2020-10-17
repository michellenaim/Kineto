@genres.each do |genre|
    json.set! genre.id do
        json.id genre.id
        json.name genre.name
        json.movieIds genre.movies.ids 
    end
end