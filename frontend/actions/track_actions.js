export const TrackConstants = {
  CREATE_TRACK: "CREATE_TRACK",
  PLAY_TRACK: "PLAY_TRACK",
  REQUEST_TRACK: "REQUEST_TRACK",
  RECEIVE_TRACK: "RECEIVE_TRACK",
  DELETE_TRACK: "DELETE_TRACK",
  EDIT_TRACK: "EDIT_TRACK",
  REQUEST_TRACKS: "REQUEST_TRACKS",
  REQUEST_USER_TRACKS: "REQUEST_USER_TRACKS",
  RECEIVE_TRACKS: "RECEIVE_TRACKS",
  CLEAR_TRACKS: "CLEAR_TRACKS",
  RECEIVE_TRACK_COMMENTS: "RECEIVE_TRACK_COMMENTS"
};

export const createTrack = (track) => ({
  type: TrackConstants.CREATE_TRACK,
  track
});

export const playTrack = (track) => ({
  type: TrackConstants.PLAY_TRACK,
  track
});

export const requestTrack = (trackId) => ({
  type: TrackConstants.REQUEST_TRACK,
  trackId
});

export const receiveTrack = (track) => ({
  type: TrackConstants.RECEIVE_TRACK,
  track
});

export const deleteTrack = (trackId) => ({
  type: TrackConstants.DELETE_TRACK,
  trackId
});

export const editTrack = (track) => ({
  type: TrackConstants.EDIT_TRACK,
  track
});

export const requestTracks = () => ({
  type: TrackConstants.REQUEST_TRACKS
});

export const requestUserTracks = (username) => ({
  type: TrackConstants.REQUEST_USER_TRACKS,
  username
});

export const receiveTracks = (tracks) => ({
  type: TrackConstants.RECEIVE_TRACKS,
  tracks
});

export const clearTracks = () => ({
  type: TrackConstants.CLEAR_TRACKS,
});

export const receiveTrackComments = (comment) => ({
  type: TrackConstants.RECEIVE_TRACK_COMMENTS,
  comment
});
