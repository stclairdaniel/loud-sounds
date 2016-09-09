import React from 'react';
import { Link, withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    const { trackId, currentUser } = this.props;
    this.state = {body: "",
                  track_id: trackId,
                  user_id: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disabled = this.disabled.bind(this);
    this.placeholder = this.placeholder.bind(this);
    this.inputDisabled = this.inputDisabled.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createComment({body: this.state.body, track_id: this.state.track_id, user_id: this.props.currentUser.id});
    this.setState({body: ""});
  }

  disabled () {
    if (this.state.body.length === 0 || !this.props.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  placeholder () {
    if (this.props.currentUser) {
      return "Leave a comment...";
    } else {
      return "Sign in to leave a comment";
    }
  }

  inputDisabled () {
    if (this.props.currentUser) {
      return false;
    } else {
      return true;
    }
  }

  render () {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input className="comment-input" onChange={this.handleChange}
              name="body"
              value={this.state.body}
              placeholder={this.placeholder()}
              disabled={this.inputDisabled()}>
        </input>
        <input type="submit" value="+" className="form-submit" disabled={this.disabled()}/>
      </form>
    );
  }
}

export default withRouter(CommentForm);
