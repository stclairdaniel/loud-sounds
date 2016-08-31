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

  render () {
    const errors = [];
    this.props.errors.forEach( error => {
      errors.push(<li key={error}>{error}</li>);
    });

    return (
    <div className="upload-form-container">
      <form onSubmit={this.handleSubmit} className="form">
        <h1 className="form-h1">Upload Track</h1>

        <ul className="form-errors">
          {errors}
        </ul>

        <label className="form-input-label">Title
          <input onChange={this.handleChange}
                name = "title"
                className="form-input"
                ></input>
        </label>

        <label className="form-input-label">Genre
          <input onChange={this.handleChange}
                 name="genre"
                 className="form-input"></input>
        </label>

        <label className="form-input-label">Desription
          <input onChange={this.handleChange}
                 name="description"
                 className="form-input"></input>
        </label>

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
