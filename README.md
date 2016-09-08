# LoudSounds

[LoudSounds live][link]

[link]: http://www.loudsounds.online

LoudSounds is a full-stack web application inspired by SoundCloud. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Single-Page App

LoudSounds takes advantage of the React Router in order to deliver a seamless user experience, delivering all content on a static page.

### Track Uploading, Rendering, & Editing

Tracks are stored in a database table containing columns for the `user_id` of the artist who posted the track, a link to the `audio_file_url` provided by the Cloudinary upload widget, and other essential information including track `comments` and `likes`. On enter hooks make an API call to the database to receive tracks appropriate for the view: and individual track for a show page, tracks uploaded by a specific user for the user's show page, tracks filtered by genre the genre show page, and all tracks for the main page (in future versions to improve scalability, the main show page on enter hook can easily be edited to only grab the most recent N tracks). Tracks are rendered along with a count of likes and comments in the main stream or user stream. An expanded comments view is visible on the track's show page.

### Comments and Likes

Comments and Likes are both join tables in the database joining `user_id`s
and `track_id`s. Comments has an additional `body` column. The state does not keep track of comments and likes, but included each as part of the tracks state. This way, the tracks reducer can simply merge the current state with the updated track whenever a comment or like is made or destroyed.

### Playing Music

Because LoudSounds is a single page app, continuous music play functions across the site. Play state will even persist through log in or sign up. A custom fork of the audio.js library is used to load tracks only upon request.

### Sessions

Playing tracks and navigating the site are not locked behind a log in. Uploading, commenting, and liking tracks all require login. A guest account is provided for trial of features before signing up.

### Search

A real-time search dropdown performs an Active Record query for artists or tracks like the search term and links to the appropriate pages.
