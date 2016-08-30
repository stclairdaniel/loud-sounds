import React from 'react';
import { Link, withRouter } from 'react-router';
import { login, signup } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick (e) {
    e.preventDefault();
    this.props.login(this.state);
    this.render();
  }

  render () {

    const errors = [];
    this.props.errors.forEach( error => {
      errors.push(<li key={error}>{error}</li>);
    });

    return (
    <div>
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

      <button onClick={this.handleClick}>Log In</button>

      <p>Don't have an account? <Link to="signup">Sign Up</Link> instead.</p>
    </div>
    );
  }
}

export default withRouter(LoginForm);
