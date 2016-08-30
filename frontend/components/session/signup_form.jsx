import React from 'react';
import { Link, withRouter} from 'react-router';
import { login, signup } from '../../actions/session_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", email: "", password: "", passwordAgain: ""};
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._disabled = this._disabled.bind(this);
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
    this.props.signup({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password});
  }

  _disabled () {
    if (this.state.password === this.state.passwordAgain &&
      (this.state.password.length > 0 && this.state.passwordAgain.length > 0)) {
      return false;
    } else {
      return true;
    }
  }

  render () {

    const link = <Link to="login">Log In</Link>;

    const errors = [];
    this.props.errors.forEach( error => {
      errors.push(<li key={error}>{error}</li>);
    });

    return (
    <div>
      <h1>Sign Up</h1>

      <ul>
        {errors}
      </ul>

      <label>E-mail Address
        <input onChange={this._handleChange} name="email"></input>
      </label>

      <label>Username
        <input onChange={this._handleChange} name = "username"></input>
      </label>

      <label>Password
        <input type="password"
               onChange={this._handleChange}
               name="password">
        </input>
      </label>

      <label>Password (again)
        <input type="password"
               onChange={this._handleChange}
              name="passwordAgain">
        </input>
      </label>

      <button onClick={this._handleClick}
              disabled={this._disabled()}>Sign Up</button>

      <p>{link} instead?</p>
    </div>
    );
  }
}

export default withRouter(SignupForm);
