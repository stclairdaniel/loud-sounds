import React from 'react';
import { Link, withRouter } from 'react-router';
import { login, signup } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidUpdate(){
    if (this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  _handleChange (e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  _handleClick (e) {
    e.preventDefault();
    this.props.login(this.state);
    this.render();
  }

  render () {

    const link = <Link to="signup">Sign Up</Link>;

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
        <input onChange={this._handleChange} name = "username"></input>
      </label>

      <label>Password
        <input type="password" onChange={this._handleChange} name="password"></input>
      </label>

      <button onClick={this._handleClick}>Log In</button>

      <p>{link} instead?</p>
    </div>
    );
  }
}

export default withRouter(LoginForm);
