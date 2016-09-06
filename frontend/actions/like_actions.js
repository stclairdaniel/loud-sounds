export const LikeConstants = {
  CREATE_LIKE: "CREATE_LIKE",
  DELETE_LIKE: "DELETE_LIKE"
};

export const createLike = (like) => ({
  type: LikeConstants.CREATE_LIKE,
  like
});

export const deleteLike = (like) => ({
  type: LikeConstants.DELETE_LIKE,
  like
});
