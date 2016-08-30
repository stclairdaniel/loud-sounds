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
    <form onSubmit={this.handleSubmit}>
      <h1>Log In</h1>

      <ul>
        {errors}
      </ul>

      <label>Username
        <input onChange={this.handleChange} name = "username"></input>
      </label>

      <label>Password
        <input type="password" onChange={this.handleChange} name="password"></input>
      </label>

      <input type="submit" value="Log In"/>

      <p>Don't have an account? <Link to="signup">Sign Up</Link> instead.</p>
    </form>
    );
  }
}

export default withRouter(LoginForm);
