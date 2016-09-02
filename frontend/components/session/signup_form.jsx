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
                  header_image_url: "http://res.cloudinary.com/loudsounds/image/upload/c_scale,w_100/v1472833698/Site%20Icons/default_user_image_skynsc.png",
                  image_success_message: "Optional"};
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
                         image_success_message: "Upload succeeded"});
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
    if (this.state.username.match(/^[a-zA-Z0-9-_]*$/)) {
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="form">
          <h1 className="form-h1">Sign Up</h1>

          <label className="form-input-label">E-mail Address
            <input onChange={this.handleChange}
                   name="email"
                   className="form-input">
            </input>
          </label>
          <span className="form-error">{this.props.errors.email}</span>

          <label className="form-input-label">Username
            <input onChange={this.handleChange}
                   name = "username"
                   className="form-input">
            </input>
          </label>
          <span className="form-error">{this.props.errors.username}</span>

          <label className="form-input-label">Password
            <input type="password"
                   onChange={this.handleChange}
                   name="password"
                   className="form-input">
            </input>
          </label>

          <label>Confirm password
            <input type="password"
                   onChange={this.handleChange}
                   name="passwordAgain"
                   className="form-input">
            </input>
          </label>

          <ul>{inlineErrors}</ul>

          <button className="form-submit"
                  onClick={this.uploadImage}>Upload User Image</button>
                <span className="form-success-message">
            {this.state.image_success_message}
          </span>

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
