export const UserConstants = {
  RECEIVE_USER: "RECEIVE_USER",
  REQUEST_USER: "REQUEST_USER",
  REQUEST_USERS_LIKE: "REQUEST_USERS_LIKE",
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

export const requestUsersLike = (username) => ({
  type: UserConstants.REQUEST_USERS_LIKE,
  username
});

export const requestLikedTracks = (username) => ({
  type: UserConstants.REQUEST_LIKED_TRACKS,
  username
});
