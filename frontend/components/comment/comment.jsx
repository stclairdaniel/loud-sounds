import React from 'react';

const Comment = ({comment}) => {
  return (
    <li>{comment.user.username} wrote: {comment.body}</li>
  );
};

export default Comment;
