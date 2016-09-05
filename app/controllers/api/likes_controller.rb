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
    @like = Like.find(params[:id])
    if @like
      @like.destroy
      render json: {}
    else
      @errors = { like: ['not found'] }
      render './errors', status: 404
    end
  end

  def index
    @likes = Like.where(user_id: params[:user_id])
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :track_id)
  end

end
