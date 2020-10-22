# json.movie_genres do 
#     @genre.movies.each do |movie|
#         json.extract! movie, :id
#         # json.extract! @genre, :id
#     end
# end

json.genre do
    json.extract! @genre, :id,:name, :movie_ids
end 

# debugger

json.movies do
    @genre.movies.each do |movie|
        json.set! movie.id do
            json.extract! movie, :id,:title,:description, :year, :rating, :runtime
            json.movieURL url_for(movie.url)
            json.photoURL url_for(movie.photo)
        end
    end
end

