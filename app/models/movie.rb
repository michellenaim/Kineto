class Movie < ApplicationRecord
    validates :title, :description, :year, :rating, :runtime, presence: true

    has_one_attached :url
end
