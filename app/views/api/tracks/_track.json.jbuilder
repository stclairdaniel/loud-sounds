json.set! track.id do
  json.title track.title
  json.genre track.genre
  json.user track.user
  json.description track.description
  json.audio_file_url track.audio_file_url
  json.image_url track.image_url
  json.id track.id
  json.comments track.comments, :id, :body, :user, :track
  json.likes do
    json.array! track.likes.map { |like| like.user_id}
  end
end

#  json.likes track.likes, :user_id  this is working
