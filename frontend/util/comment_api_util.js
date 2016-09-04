export const createComment = (success, error, comment) => (
  $.ajax({
    type: "POST",
    url: "/api/comments",
    data: {comment: comment},
    success: success,
    error: error
  })
);
