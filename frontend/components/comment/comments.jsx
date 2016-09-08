import React from 'react';
import Infinite from 'react-infinite';
import CommentContainer from './comment_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.commentsList = this.commentsList.bind(this);
    this.getContainerHeight = this.getContainerHeight.bind(this);
    this.className = this.className.bind(this);
  }

  getContainerHeight () {
    //magic number - makes sure all elements fit in window.
    return $ (window).height() - 500;
  }

  commentsList () {
    let comments = this.props.tracks[this.props.trackId].comments;
    comments = comments.reverse().map( (comment, idx) => {
      return <CommentContainer key={comment.body + idx } comment={comment}/>;
    });
    return comments;
  }

  className () {
    if (this.props.tracks[this.props.trackId].comments.length === 0) {
      return "none";
    } else {
      return "comments-container";
    }
  }

  render () {
    return (
      <div className={this.className()}>
      <Infinite containerHeight={this.getContainerHeight()} elementHeight={68}>
        {this.commentsList()}
      </Infinite>
      </div>
    );
  }
}

export default Comments;
