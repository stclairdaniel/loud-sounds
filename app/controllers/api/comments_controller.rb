class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      @errors = @comment.errors
      render './errors', status: 400
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :track_id, :body)
  end

end
