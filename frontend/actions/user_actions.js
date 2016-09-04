export const UserConstants = {
  RECEIVE_USER: "RECEIVE_USER",
  REQUEST_USER: "REQUEST_USER",
};

export const receiveUser = (user) => ({
  type: UserConstants.RECEIVE_USER,
  user
});

export const requestUser = (user) => ({
  type: UserConstants.REQUEST_USER,
  user
});
