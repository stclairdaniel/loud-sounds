export const createLike = (success, error, like) => (
  $.ajax({
    type: "POST",
    url: "/api/likes",
    data: {like: like},
    success: success,
    error: error
  })
);

// dummy index
export const deleteLike = (success, error, like) => (
  $.ajax({
    type: "DELETE",
    url: `/api/likes/1`,
    data: {user_id: like.user_id, track_id: like.track_id },
    success: success,
    error: error
  })
);
