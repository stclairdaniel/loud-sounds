class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:session][:username], params[:session][:password]
    )
    if @user
      login!(@user)
      render './api/users/show'
    else
      @errors = { invalid: ['credentials'] }
      render './errors', status: 404
    end
  end

  def destroy
    if current_user
      logout!
      render plain: '{}'
    else
      @errors = { user: ['not found'] }
      render './errors', status: 404
    end
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
