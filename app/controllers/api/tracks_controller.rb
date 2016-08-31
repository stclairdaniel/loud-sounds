class Api::TracksController < ApplicationController
  def create
    @user = Track.new
    if @track.save!
      render './api/tracks/show'
    else
      @errors = @tracks.errors.full_messages
      render './errors', status: 404
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre, :description, :audio_file, :image_url)
  end
end
