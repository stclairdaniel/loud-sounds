json.set! track.id do
  json.title track.title
  json.genre track.genre
  json.user_id track.user_id
  json.description track.description
  json.audio_file_url track.audio_file_url
  json.image_url track.image_url
end
