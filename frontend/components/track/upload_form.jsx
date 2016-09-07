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
                  audio_image_url: "http://res.cloudinary.com/loudsounds/image/upload/v1473261173/cloud-music-2_aotps0.png",
                  image_url: "http://res.cloudinary.com/loudsounds/image/upload/v1473198591/vgv7zdei4rllspn9ngio_gqermj.jpg",
                  user_id: this.props.userId,
                  username: this.props.username,
                  audio_upload_icon_display: "upload-icon",
                  image_upload_icon_display: "upload-icon"};
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
                         audio_image_url: "http://res.cloudinary.com/loudsounds/image/upload/v1472834316/default_track_icon_d3yaka.png"});
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
                         image_upload_icon_display: "none"});
        }
      }
    );
  }

  render () {
    return (
    <div className="form-container">
      <form onSubmit={this.handleSubmit}>
        <h1>Upload Track</h1>

        <label>Title
          <input onChange={this.handleChange}
                name = "title"
                ></input>
        </label>
        <span className="form-error">{this.props.errors.title}</span>

        <label>Genre
          <input onChange={this.handleChange}
                 name="genre"></input>
        </label>
        <span className="form-error">{this.props.errors.genre}</span>

        <label>Description (optional)
          <input onChange={this.handleChange}
                 name="description"></input>
        </label>
        <span className="form-error">{this.props.errors.description}</span>

        <img src={this.state.image_url} onClick={this.uploadImage} className="upload-image"></img>
        <img src="http://res.cloudinary.com/loudsounds/image/upload/v1473259781/cloud-upload-2_mt41zs.png" className={this.state.image_upload_icon_display}></img>

        <img src={this.state.audio_image_url} onClick={this.uploadAudio} className="upload-image"></img>

        <input type="submit" value="Upload Track" className="form-submit"/>
      </form>
  </div>
    );
  }
}

export default withRouter(UploadForm);
