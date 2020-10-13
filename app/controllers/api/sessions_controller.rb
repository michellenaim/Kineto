class Api::SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Invalid email or password.']
    else
      login!(@user)
      render 'api/users/show'
    end

  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: ["Log out successful!"]
    end
  end

end
