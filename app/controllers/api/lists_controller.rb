class Api::ListsController < ApplicationController
skip_before_action :verify_authenticity_token
    def index
        @lists = List.where(user_id: current_user.id)
        render :index
    end

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
       @list = current_user.lists.find_by(id: params[:id])
       if @list.destroy
            render :show
       else
            render @list.errors.full_messages, status: 404
       end
    end
         
    private

    def list_params
        params.require(:list).permit(:user_id, :movie_id)
    end
end
