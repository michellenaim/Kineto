json.set! @genre.id do
    json.extract! @genre, :id,:name, :movie_ids
    # json.movies do
    #     @genre.movies.each do |movie|
    #         json.set! movie.id do
    #             json.extract! movie, :id,:title,:description
    #             # json.url url_for(movie.url)
    #             # json.photo url_for(movie.photo)
    #         end
    #     end
    # end
end
