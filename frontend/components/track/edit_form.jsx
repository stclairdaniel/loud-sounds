import React from 'react';
import { Link, withRouter } from 'react-router';
import { editTrack } from '../../actions/track_actions';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    const id = parseInt(this.props.params.id);
    this.state = {title: this.props.tracks[id].title,
                  genre: this.props.tracks[id].genre,
                  id: id,
                  description: this.props.tracks[id].description,
                  audio_file_url: this.props.tracks[id].audio_file_url,
                  image_url: this.props.tracks[id].image_url,
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
    this.props.editTrack(this.state);
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
    <div className="form-container">
      <form onSubmit={this.handleSubmit}>
        <h1>Edit Track</h1>

        <label>Title
          <input onChange={this.handleChange}
                name = "title"
                value = {this.state.title}
                ></input>
        </label>
        <span className="form-error">{this.props.errors.title}</span>

        <label>Genre
          <input onChange={this.handleChange}
                 name="genre"
                 value = {this.state.genre}></input>
        </label>
        <span className="form-error">{this.props.errors.genre}</span>

        <label>Description (optional)
          <input onChange={this.handleChange}
                 name="description"
                 value = {this.state.description}></input>
        </label>
        <span className="form-error">{this.props.errors.description}</span>

        <button className="form-submit"
                onClick={this.uploadAudio}>Upload Audio File</button>
        <span>{this.state.audio_success_message}</span>

        <button className="form-submit"
                onClick={this.uploadImage}>Upload Track Image</button>
              <span>{this.state.image_success_message}</span>

        <input type="submit" value="Edit Track" className="form-submit"/>
      </form>
  </div>
    );
  }
}

export default withRouter(EditForm);
