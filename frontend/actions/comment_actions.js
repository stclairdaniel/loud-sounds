export const CommentConstants = {
  CREATE_COMMENT: "CREATE_COMMENT",
};

export const createComment = (comment) => ({
  type: CommentConstants.CREATE_COMMENT,
  comment
});
