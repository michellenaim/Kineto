class Api::GenresController < ApplicationController
    def index 
        @genres = Genre.all
        render :index
    end

    def show
        @genre = Genre.find(params[:id])
        if @genre
            render :show
        else
            render json: @genre.errors.full_messages, status: 404
        end
    end
end
