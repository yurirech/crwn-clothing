import React, {Component} from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      email: '',
      password: ''
    }
  }
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and passowrd</span>

        <form>
          <input name='email' type="text" value={this.state.email}/>
        </form>
      </div>
      );
  }
}

export default SignIn;