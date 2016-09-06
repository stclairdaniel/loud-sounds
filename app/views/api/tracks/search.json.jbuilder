json.array! @tracks do |track|
  json.extract! track, :id, :title, :user, :image_url
end
