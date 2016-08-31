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

    const errors = [];
    this.props.errors.forEach( error => {
      errors.push(<li key={error}>{error}</li>);
    });

    return (
    <div className="session-form-container">
      <form onSubmit={this.handleSubmit} className="session-form">
        <h1 className="form-h1">Log In</h1>

        <ul className="form-errors">
          {errors}
        </ul>

        <label className="form-input-label">Username
          <input onChange={this.handleChange}
                name = "username"
                className="form-input"
                ></input>
        </label>

        <label className="form-input-label">Password
          <input type="password"
                 onChange={this.handleChange}
                 name="password"
                 className="form-input"></input>
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
