## Component Heirarchy

**AuthFormContainer**
 - AuthForm (props: currentUser.username)

**HomeContainer**
- Header
  * SearchForm
    - SearchTrackIndex (props: searchResults)
- NowPlaying (props: tracks.id, tracks.title)


**StreamContainer**
- Stream
  - TrackIndex (props: tracks, list by created_at)
    - TrackContainer (props: track.id)
      - Comment Form


 **UserPageContainer**
- UserHeaderContainer (props: user.id)
  * UserHeader
- StreamContainer (props: tracks where user.id = tracks.id.user_id)

**TrackPageContainer**
- TrackContainer (props: tracks.id)
  * CommentsContainer (props: tracks.id.comments)

**CommentContainer**
-CommentsIndex
  * CommentDetail

**TrackForm**
- NewTrackForm (also works for edit track, needs props tracks.id)

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/" | "StreamContainer" |
| "/:username" | "UserPageContainer" |
| "/:username/:track_name" | "TrackPageContainer" |
| "/upload-track" | "TrackForm" |
