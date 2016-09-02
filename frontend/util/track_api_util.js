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
