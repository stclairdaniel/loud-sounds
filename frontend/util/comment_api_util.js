export const createComment = (success, error, comment) => (
  $.ajax({
    type: "POST",
    url: "/api/comments",
    data: {comment: comment},
    success: success,
    error: error
  })
);

export const deleteComment = (success, error, commentId) => (
  $.ajax({
    type: "DELETE",
    url: `/api/comments/${commentId}`,
    success: success,
    error: error
  })
);
