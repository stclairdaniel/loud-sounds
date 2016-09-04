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
