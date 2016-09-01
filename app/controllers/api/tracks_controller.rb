class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      @errors = @track.errors
      render './errors', status: 400
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre, :description, :audio_file_url, :image_url, :user_id)
  end
end
