export const TrackConstants = {
  CREATE_TRACK: "CREATE_TRACK",
  RECEIVE_TRACK: "RECEIVE_TRACK",
  RECEIVE_TRACKS: "RECEIVE_TRACKS",
  RECEIVE_TRACK_ERRORS: "RECEIVE_TRACK_ERRORS",
  CLEAR_TRACK_ERRORS: "CLEAR_TRACK_ERRORS"
};

export const createTrack = (track) => ({
  type: TrackConstants.CREATE_TRACK,
  track
});

export const receiveTrack = (track) => ({
  type: TrackConstants.RECEIVE_TRACK,
  track
});

export const receiveTracks = (tracks) => ({
  type: TrackConstants.RECEIVE_TRACKS,
  tracks
});

export const receiveTrackErrors = (errors) => ({
  type: TrackConstants.RECEIVE_TRACK_ERRORS,
  errors
});

export const clearTrackErrors = () => ({
  type: TrackConstants.CLEAR_TRACK_ERRORS
});
