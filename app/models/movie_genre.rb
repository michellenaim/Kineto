class MovieGenre < ApplicationRecord
    validates :genre_id, :movie_id, presence: true
end
