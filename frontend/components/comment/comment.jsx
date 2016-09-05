import React from 'react';
import { withRouter } from 'react-router';

class Comment extends React.Component {
  constructor (props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.commentUsername = this.commentUsername.bind(this);
    this.showIcon = this.showIcon.bind(this);
  }

  clickHandler () {
    this.props.router.push(`/${this.props.comment.user.username}`);
  }

  commentUsername ()  {
    if (this.props.currentUser && this.props.currentUser.username === this.props.comment.user.username) {
      return "You";
    } else {
      return this.props.comment.user.username;
    }
  }

  showIcon () {
    if (this.commentUsername() === "You") {
      return "show-icon";
    } else {
      return "hide-icon";
    }
  }

  render () {

    return (
      <li className='comment-list'>
        <span className='comment-list-username' onClick={this.clickHandler}>
          {this.commentUsername()}
        </span>
        <span>
          wrote: {this.props.comment.body}
        </span>
        <img src="http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_25/v1472928235/trash-512_tzepba.png" className={this.showIcon()} onClick={this.deleteClickHandler}></img>
      </li>
    );
  }
}

export default withRouter(Comment);
