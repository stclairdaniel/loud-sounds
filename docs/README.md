# LoudSounds

[Heroku link][heroku]

[heroku]: http://www.loudsounds.online

## Minimum Viable Product

LoudSounds is a web application inspired by SoundCloud built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Song CRUD
- [ ] Comments
- [ ] User pages
- [ ] Bonus: Wave Forms
- [ ] Bonus: Likes
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Tracks Model, API, and components (2 days)

**Objective:** Tracks can be created, read, edited and destroyed through
the API.

- [ ] `Track` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for tracks (`TracksController`)
- [ ] JBuilder views for tracks
- Tracks components and respective Redux loops
  - [ ] `TrackIndex`
  - [ ] `TrackContainer`
  - [ ] `TrackForm`
- [ ] Style tracks components
- [ ] Seed tracks

### Phase 3: Containers (2 daya)

**Objective:** Build Home, Stream, and User page containers

- [ ] Home container
- [ ] Stream container
- [ ] User page container
- [ ] Style containers

### Phase 4: Comments (1 days)

**Objective:** Users can leave comments on a Track.

- [ ] `Comment` model and `Comments` join table
- [ ] Adding comments to tracks
- [ ] Style comment components
- [ ] Seed comments with seed data

### Phase 5: Continuous play (2 days)

**objective:** Allow continuous song play.

- [ ] Research continuous play
- [ ] Implement continuous play

### Bonus Features (TBD)
- [ ] Add likes
- [ ] Add waveforms
- [ ] Add BPM/key analyzing
- [ ] Recommend similar BPM/key songs
