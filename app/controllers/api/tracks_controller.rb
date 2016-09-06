class Api::TracksController < ApplicationController
  def index
    if params[:username]
      @user = User.where(username: params[:username]).first
      @tracks = Track.where(user_id: @user.id)
    elsif params[:title]
      @tracks = Track.where("title ILIKE ?" , "%#{params[:title]}%")
      render :search
    else
      @tracks = Track.all
    end
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      @errors = @track.errors
      render './errors', status: 400
    end
  end

  def update
    @track = Track.find(params[:id])
    @track.update(track_params)
    if @track.save!
      render :show
    else
      @errors = @track.errors
      render './errors', status: 400
    end
  end

  def destroy
    @track = Track.find(params[:id])
    if @track
      @track.destroy
      render json: {}
    else
      @errors = { track: ['not found'] }
      render './errors', status: 404
    end
  end

  def show
    @track = Track.find(params[:id])
    if @track
      render :show
    else
      @errors = { track: ['not found'] }
      render './errors', status: 404
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :genre, :description, :audio_file_url, :image_url, :user_id)
  end
end
