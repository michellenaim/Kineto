class Movie < ApplicationRecord
    validates :title, :description, :year, :rating, :runtime, presence: true

    has_one_attached :url
    has_one_attached :photo
    
    has_many :movie_genres,
        primary_key: :id, 
        foreign_key: :movie_id,
        class_name: :MovieGenre

    has_many :genres,
        through: :movie_genres,
        source: :genre
end
