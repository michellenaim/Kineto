class Api::ListsController < ApplicationController

    def show
        @list = List.find(params[:id])
        render :show
    end

    def create
        @list = List.new(list_params)
        @list.user_id = current_user.id
        if @list.save
          render :create
        else
          render @list.errors.full_messages, status: 404
        end
    end

    def destroy
       @list = List.find_by(user_id:[current_user.id], movie_id:[params[:id]])
       if @list.destroy
            render json: { id: params[:id]}
       else
            render @list.errors.full_messages, status: 404
       end
    end
         
    private

    def list_params
        params.require(:list).permit(:movie_id)
    end
end
