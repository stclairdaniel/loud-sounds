import React from 'react';
import { Link, withRouter } from 'react-router';
import { login, signup } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
    this.props.login(this.state);
  }

  render () {

    return (
    <div className="form-container">
      <form onSubmit={this.handleSubmit}>
        <h1>Log In</h1>

        <span className="form-error">{this.props.errors.invalid}</span>

        <label>Username
          <input onChange={this.handleChange}
                name = "username"
                ></input>
        </label>

        <label>Password
          <input type="password"
                 onChange={this.handleChange}
                 name="password"></input>
        </label>

        <input type="submit" value="Log In" className="form-submit"/>

        <span className="form-message">
          Don't have an account?
          <Link to="signup" className="form-link"> Sign up</Link> instead.
        </span>
      </form>
  </div>
    );
  }
}

export default withRouter(LoginForm);
