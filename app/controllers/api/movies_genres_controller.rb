class Api::MoviesGenresController < ApplicationController
    def index 
        @moviesgenres = MovieGenre.all
        render :index
    end

    def show
        @moviesgenre = MovieGenre.find(params[:id])
        if @moviesgenre
            render :show
        else
            render json: @moviesgenre.errors.full_messages, status: 404
        end
    end
end
