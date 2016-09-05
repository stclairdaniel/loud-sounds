import React from 'react';
import Infinite from 'react-infinite';
import CommentContainer from './comment_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.commentsList = this.commentsList.bind(this);
    this.getContainerHeight = this.getContainerHeight.bind(this);
  }

  getContainerHeight () {
    //magic number - makes sure all elements fit in window.
    return $ (window).height() - 500;
  }

  commentsList () {
    let comments = this.props.tracks[this.props.trackId].comments;
    comments = comments.map(comment => {
      return <CommentContainer key={comment.body} comment={comment}/>;
    });
    return comments;
  }

  render () {
    return (
      <Infinite containerHeight={this.getContainerHeight()} elementHeight={30}>
        {this.commentsList()}
      </Infinite>
    );
  }
}

export default Comments;
