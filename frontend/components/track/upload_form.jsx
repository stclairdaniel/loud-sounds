import React from 'react';
import { Link, withRouter } from 'react-router';
import { createTrack } from '../../actions/track_actions';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",
                  genre: "",
                  description: "",
                  audio_file_url: "",
                  user_id: this.props.user_id};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createTrack(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trackCount !== this.props.trackCount) {
      this.props.router.push('/');
    }
  }

  render () {
    return (
    <div className="upload-form-container">
      <form onSubmit={this.handleSubmit} className="form">
        <h1 className="form-h1">Upload Track</h1>

        <label className="form-input-label">Title
          <input onChange={this.handleChange}
                name = "title"
                className="form-input"
                ></input>
        </label>
        <span className="form-error">{this.props.errors.title}</span>

        <label className="form-input-label">Genre
          <input onChange={this.handleChange}
                 name="genre"
                 className="form-input"></input>
        </label>
        <span className="form-error">{this.props.errors.genre}</span>

        <label className="form-input-label">Description
          <input onChange={this.handleChange}
                 name="description"
                 className="form-input"></input>
        </label>
        <span className="form-error">{this.props.errors.description}</span>

        <label className="form-input-label">File URL
          <input onChange={this.handleChange}
                 name="audio_file_url"
                 className="form-input"></input>
        </label>

        <input type="submit" value="Upload Track" className="form-submit"/>
      </form>
  </div>
    );
  }
}

export default withRouter(UploadForm);
