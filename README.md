# LoudSounds

[LoudSounds live][link]

[link]: http://www.loudsounds.online

LoudSounds is a full-stack web application inspired by SoundCloud. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Single-Page App

LoudSounds takes advantage of the React Router in order to deliver a seamless user experience, delivering all content on a static page.

### Track Uploading, Rendering, & Editing

Tracks are stored in a database table containing columns for the `user_id` of the artist who posted the track, a link to the `audio_file_url` provided by the Cloudinary upload widget, and other essential information including track `comments` and `likes`. On enter hooks make an API call to the database to receive tracks appropriate for the view: and individual track for a show page, tracks uploaded by a specific user for the user's show page, tracks filtered by genre the genre show page, tracks filtered by title search, and all tracks for the main page (in future versions to improve scalability, the main show page on enter hook can easily be edited to only grab the most recent N tracks). Tracks are rendered along with a count of likes and comments in the main stream or user stream. An expanded comments view is visible on the track's show page. The tracks controller index method returns the appropriate tracks based on URL query parameters:

```ruby
 def index
    if params[:username]
      @user = User.where(username: params[:username]).first
      @tracks = Track.where(user_id: @user.id)
    elsif params[:title]
      @tracks = Track.where("title ILIKE ?" , "%#{params[:title]}%")
      render :search
    elsif params[:genre]
      @tracks = Track.where(genre: params[:genre])
    else
      @tracks = Track.all
    end
  end
```

### Comments and Likes

Comments and Likes are both join tables in the database joining `user_id`s
and `track_id`s. Comments has an additional `body` column. The state does not keep track of comments and likes, but included each as part of the tracks state. This way, the tracks reducer can simply merge the current state with the updated track whenever a comment or like is made or destroyed.

### Playing Music

Because LoudSounds is a single page app, continuous music play functions across the site. Play state will even persist through log in or sign up. A custom fork of the audio.js library is used to load tracks upon request. Playing status is part of the state and used to render the appropriate play/pause icon in the track view and also the "Now Playing" segment of the music player footer.

### Sessions

Playing tracks and navigating the site are not locked behind a log in. Uploading, commenting, and liking tracks all require login. A guest account is provided for trial of features before signing up. A logged in user can access all of their uploaded tracks or all of their liked tracks on the user page.

### Search

A real-time search dropdown performs an Active Record query for artists or tracks like the search term and links to the appropriate pages. The search reducer runs two actions: one to filter artists and one to filter tracks. These results are kept in separate arrays under the search key in the state.


### Notes from the creator

All music and artwork is owned by the original recording artists and/or record labels. This site was developed for my own education and is not intended to be used for commercial purposes.
