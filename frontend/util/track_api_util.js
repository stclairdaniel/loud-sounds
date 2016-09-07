export const createTrack = (success, error, track) => (
  $.ajax({
    type: "POST",
    url: "/api/tracks",
    data: {track: track},
    success: success,
    error: error
  })
);

export const requestTrack = (success, error, id) => (
  $.ajax({
    type: "GET",
    url: `/api/tracks/${id}`,
    success: success,
    error: error
  })
);

export const deleteTrack = (success, error, trackId) => (
  $.ajax({
    type: "DELETE",
    url: `/api/tracks/${trackId}`,
    success: success,
    error: error
  })
);

export const editTrack = (success, error, track) => (
  $.ajax({
    type: "PATCH",
    url: `/api/tracks/${track.id}`,
    data: {track: track},
    success: success,
    error: error
  })
);

export const requestTracks = (success, error) => (
  $.ajax({
    type: "GET",
    url: "/api/tracks",
    success: success,
    error: error
  })
);

export const requestUserTracks = (success, error, username) => (
  $.ajax({
    type: "GET",
    url: "/api/tracks",
    data: {username: username},
    success: success,
    error: error
  })
);

export const requestTracksLike = (success, error, title) => (
  $.ajax({
    type: "GET",
    url: `/api/tracks/`,
    data: {title: title},
    success: success,
    error: error
  })
);

export const requestGenreTracks = (success, error, genre) => (
  $.ajax({
    type: "GET",
    url: `/api/tracks/`,
    data: {genre: genre},
    success: success,
    error: error
  })
);
