export const CommentConstants = {
  CREATE_COMMENT: "CREATE_COMMENT",
  DELETE_COMMENT: "DELETE_COMMENT"
};

export const createComment = (comment) => ({
  type: CommentConstants.CREATE_COMMENT,
  comment
});

export const deleteComment = (commentId) => ({
  type: CommentConstants.DELETE_COMMENT,
  commentId
});
