class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      @errors = @user.errors.full_messages
      render './errors', status: 400
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
