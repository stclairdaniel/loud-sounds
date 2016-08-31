export const createTrack = (success, error, track) => (
  $.ajax({
    type: "POST",
    url: "/api/tracks",
    data: {track: track},
    success: success,
    error: error
  })
);
