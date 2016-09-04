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
                  image_url: "http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_250/v1472834316/default_track_icon_d3yaka.png",
                  user_id: this.props.userId,
                  username: this.props.username,
                  audio_success_message: "",
                  image_success_message: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadAudio = this.uploadAudio.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.createTrack(this.state);
  }

  uploadAudio (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.audio_cloudinary_options,
      (error, results) => {
        if (!error) {
          this.setState({audio_file_url: results[0].url,
                         audio_success_message: "Upload succeeded"});
        }
      }
    );
  }

  uploadImage (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.image_cloudinary_options,
      (error, results) => {
        if (!error) {
          //cfit resizes to fill as much of boundary box while maintining
          //aspect ratio
          const path = results[0].path;
          const url =
          "http://res.cloudinary.com/loudsounds/image/upload/w_200,h_200,c_fit/";
          this.setState({image_url: url + path,
                         image_success_message: "Upload succeeded"});
        }
      }
    );
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

        <label className="form-input-label">Description (optional)
          <input onChange={this.handleChange}
                 name="description"
                 className="form-input"></input>
        </label>
        <span className="form-error">{this.props.errors.description}</span>

        <button className="form-submit"
                onClick={this.uploadAudio}>Upload Audio File</button>
        <span>{this.state.audio_success_message}</span>

        <button className="form-submit"
                onClick={this.uploadImage}>Upload Track Image</button>
              <span>{this.state.image_success_message}</span>

        <input type="submit" value="Upload Track" className="form-submit"/>
      </form>
  </div>
    );
  }
}

export default withRouter(UploadForm);
