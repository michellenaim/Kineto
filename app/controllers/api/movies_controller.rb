class Api::MoviesController < ApplicationController
    def index 
        @videos = Video.all
        render :index
    end

    def show
        @movie = Chirp.find(params[:id])
        if @movie
            render :show
        else
            render json: @movie.errors.full_messages, status: 404
        end
    end

end
