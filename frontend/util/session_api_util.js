export const signup = (success, error, user) => (
  $.ajax({
    type: "POST",
    url: "/api/users",
    data: {user: user},
    success: success,
    error: error
  })
);
export const login = (success, error, user) => (
  $.ajax({
    type: "POST",
    url: "/api/session",
    data: {session: user},
    success: success,
    error: error
  })
);
export const logout = (success, error) => (
  $.ajax({
    type: "DELETE",
    url: "/api/session",
    success: success,
    error: error
  })
);
