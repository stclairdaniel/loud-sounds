export const createLike = (success, error, like) => (
  $.ajax({
    type: "POST",
    url: "/api/likes",
    data: {like: like},
    success: success,
    error: error
  })
);

export const deleteLike = (success, error, likeId) => (
  $.ajax({
    type: "DELETE",
    url: `/api/likes/${likeId}`,
    success: success,
    error: error
  })
);
