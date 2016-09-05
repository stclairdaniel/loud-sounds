export const UserConstants = {
  RECEIVE_USER: "RECEIVE_USER",
  REQUEST_USER: "REQUEST_USER",
  REQUEST_LIKED_TRACKS: "REQUEST_LIKED_TRACKS"
};

export const receiveUser = (user) => ({
  type: UserConstants.RECEIVE_USER,
  user
});

export const requestUser = (user) => ({
  type: UserConstants.REQUEST_USER,
  user
});

export const requestLikedTracks = (userId) => ({
  type: UserConstants.REQUEST_LIKED_TRACKS,
  userId
});
