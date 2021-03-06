class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render :show
    else
      @errors = @like.errors
      render './errors', status: 400
    end
  end

  def destroy
    @user = User.find_by(id: params[:user_id])
    @track = Track.find_by(id: params[:track_id])
    @like = Like.find_by(user_id: @user.id, track_id: @track.id)
    if @like
      @like.destroy
      render @like
    else
      @errors = { like: ['not found'] }
      render './errors', status: 404
    end
  end

  def index
    @user = User.find_by(username: params[:username])
    puts @user
    @likes = Like.where(user_id: @user.id)
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :track_id)
  end

end
