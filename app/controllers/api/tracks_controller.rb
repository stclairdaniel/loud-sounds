class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    if @track.save!
      render './api/tracks/show'
    else
      @errors = @tracks.errors.full_messages
      render './errors', status: 404
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre, :description, :audio_file_url, :image_url, :user_id)
  end
end
