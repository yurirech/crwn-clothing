import React, {Component} from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState
  }
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and passowrd</span>

        <form onSubmit={}>
          <input name='email' type="text" value={this.state.email} required/>
          <input name='password' type="passowrd" value={this.state.email} required/>
          <label>Email</label>

          <input type="submit" value='Submit Form'/>
        </form>
      </div>
      );
  }
}

export default SignIn;