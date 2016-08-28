```json
{
  currentUser: {
    id: 1,
    username: "DJ Disaster"
    name: "Chris Smith"
    hometown: "San Francisco, California"
    header_image_url: "header_image.png"
  },
  tracks: {
    1: {
      title: "Sample Song",
      genre: "sample genre",
      user_id: 1,
      description: "a good song"
      image_url: "track_image.jpg"
      comments: {
        user_id: 2,
        body: "a great song"
      }
    }
  },
  errors: ["title can't be blank, genre can't be blank"],
  searchResults: [tracks.2, tracks.18, tracks.20]
}
```
