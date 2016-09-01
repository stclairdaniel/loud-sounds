import React from 'react';
import { Link, withRouter} from 'react-router';
import { login, signup } from '../../actions/session_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", email: "", password: "", passwordAgain: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordsMatch = this.passwordsMatch.bind(this);
    this.passwordsHaveLength = this.passwordsHaveLength.bind(this);
    this.fieldsHaveLength = this.fieldsHaveLength.bind(this);
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
      password: this.state.password});
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

  errors () {
    const errors = [];
    if (!this.passwordsMatch() && this.passwordsHaveLength()) {
      errors.push("Passwords don't match");
    }
    if (this.state.password.length < 6 && this.state.password.length > 0) {
      errors.push("Password is too short (minimum 6 characters)");
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

          <label>Password (again)
            <input type="password"
                   onChange={this.handleChange}
                   name="passwordAgain"
                   className="form-input">
            </input>
          </label>

          <ul>{inlineErrors}</ul>

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
