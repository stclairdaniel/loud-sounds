export const TrackConstants = {
  CREATE_TRACK: "CREATE_TRACK",
  REQUEST_TRACK: "REQUEST_TRACK",
  RECEIVE_TRACK: "RECEIVE_TRACK",
  REQUEST_TRACKS: "REQUEST_TRACKS",
  REQUEST_USER_TRACKS: "REQUEST_USER_TRACKS",
  RECEIVE_TRACKS: "RECEIVE_TRACKS"
};

export const createTrack = (track) => ({
  type: TrackConstants.CREATE_TRACK,
  track
});

export const requestTrack = (track) => ({
  type: TrackConstants.REQUEST_TRACK,
  track
});

export const receiveTrack = (track) => ({
  type: TrackConstants.RECEIVE_TRACK,
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
