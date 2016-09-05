import React from 'react';
import { Link } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    const { trackId, currentUser } = this.props;
    this.state = {body: "",
                  track_id: trackId, user_id:
                  currentUser ? currentUser.id : ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disabled = this.disabled.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: "", track_id: this.props.trackId, user_id: this.props.currentUser.id});
  }

  disabled () {
    if (this.state.body.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <span className="form-error">{this.props.errors.invalid}</span>

          <input onChange={this.handleChange}
                name="body"
                value={this.state.body}
                placeholder="Leave a comment...">
          </input>
          <input type="submit" value="+" className="form-submit" disabled={this.disabled()}/>
        </form>
      </div>
    );
  }
}

export default CommentForm;
