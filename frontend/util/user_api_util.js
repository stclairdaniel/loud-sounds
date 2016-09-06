//id in this request is a dummy - user :show only cares about username
export const requestUser = (success, error, username) => (
  $.ajax({
    type: "GET",
    url: `/api/users/1`,
    data: {username: username},
    success: success,
    error: error
  })
);

export const requestLikedTracks = (success, error, username) => (
  $.ajax({
    type: "GET",
    url: `/api/users/1/likes`,
    data: {username: username},
    success: success,
    error: error
  })
);

export const requestUsersLike = (success, error, username) => (
  $.ajax({
    type: "GET",
    url: `/api/users/`,
    data: {username: username},
    success: success,
    error: error
  })
);
