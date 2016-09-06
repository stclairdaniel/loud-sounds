class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      @errors = @user.errors
      render './errors', status: 400
    end
  end

  def show
    if params[:username]
      @user = User.find_by(username: params[:username])
      if @user
        render :show
      else
        @errors = { track: ['not found'] }
        render './errors', status: 404
      end
    end
  end

  def index
    if params[:username]
      @users = User.where("username ILIKE ?" , "%#{params[:username]}%")
      render :index
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username, :email, :password,
      :session_token, :hometown, :name, :header_image_url
    )
  end
end
