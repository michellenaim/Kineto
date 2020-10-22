@moviesgenres.each do |moviesgenre|
    json.set! moviesgenre.id do
        json.movie_id moviesgenre.movie_id
        json.genre_id moviesgenre.genre_id
    end
end