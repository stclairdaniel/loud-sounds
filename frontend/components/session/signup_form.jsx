import React from 'react';
import { Link, withRouter} from 'react-router';
import { login, signup } from '../../actions/session_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
                  email: "",
                  password: "",
                  passwordAgain: "",
                  header_image_url: "http://res.cloudinary.com/loudsounds/image/upload/v1472833698/Site%20Icons/default_user_image_skynsc.png",
                  upload_icon_display: "upload-icon"};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.passwordsMatch = this.passwordsMatch.bind(this);
    this.passwordsHaveLength = this.passwordsHaveLength.bind(this);
    this.fieldsHaveLength = this.fieldsHaveLength.bind(this);
    this.usernameValid = this.usernameValid.bind(this);
    this.emailValid = this.emailValid.bind(this);
    this.disabled = this.disabled.bind(this);
    this.errors = this.errors.bind(this);
  }

  // redirect home if user logged in
  componentDidUpdate(){
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.signup({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      header_image_url: this.state.header_image_url});
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
          this.setState({header_image_url: url + path,
                         upload_icon_display: "none"});
        }
      }
    );
  }

  passwordsMatch () {
    return this.state.password === this.state.passwordAgain;
  }

  passwordsHaveLength () {
    return (
      this.state.password.length > 0 && this.state.passwordAgain.length > 0
    );
  }

  fieldsHaveLength() {
    return (this.passwordsHaveLength() &&
            this.state.email.length > 0 &&
            this.state.username.length > 0
          );
  }

  usernameValid () {
    if (this.state.username.match(/^[a-zA-Z0-9-_ ]*$/)) {
      return true;
    }
  }

  emailValid () {
    if (this.state.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)) {
      return true;
    }
  }

  errors () {
    const errors = [];
    if (!this.passwordsMatch() && this.passwordsHaveLength()) {
      errors.push("Passwords don't match");
    }
    if (this.state.password.length < 6 && this.state.password.length > 0) {
      errors.push("Password is too short (minimum 6 characters)");
    }
    if (!this.usernameValid() && this.state.username.length > 0) {
      errors.push("Username must contain only letters, digits, _, and -");
    }
    if (!this.emailValid() && this.state.email.length > 0) {
      errors.push("Plese enter a valid e-mail address");
    }
    return errors;
  }

  // Disbles submit if errors present or fields are blank
  disabled () {
    if (this.errors().length === 0 && this.fieldsHaveLength()){
      return false;
    } else {
      return true;
    }
  }

  render () {

    const inlineErrors = [];
    this.errors().forEach( error => {
      inlineErrors.push(<li key={error} className="form-error">{error}</li>);
    });

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>

          <label>E-mail Address
            <input onChange={this.handleChange}
                   name="email">
            </input>
          </label>
          <span className="form-error">{this.props.errors.email}</span>

          <label>Username
            <input onChange={this.handleChange}
                   name = "username">
            </input>
          </label>
          <span className="form-error">{this.props.errors.username}</span>

          <label>Password
            <input type="password"
                   onChange={this.handleChange}
                   name="password">
            </input>
          </label>

          <label>Confirm password
            <input type="password"
                   onChange={this.handleChange}
                   name="passwordAgain">
            </input>
          </label>

          <ul>{inlineErrors}</ul>

          <img src={this.state.header_image_url} onClick={this.uploadImage} className="upload-image"></img>
          <img src="http://res.cloudinary.com/loudsounds/image/upload/v1473259781/cloud-upload-2_mt41zs.png" className={this.state.upload_icon_display}></img>

          <input type="submit"
                 disabled={this.disabled()}
                 value="Sign Up"
                 className="form-submit"/>

          <span className="form-message">
            Already have an account?
            <Link to="login"
                  className="form-link"> Log In</Link> instead.
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
