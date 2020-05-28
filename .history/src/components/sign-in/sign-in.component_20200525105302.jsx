import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';

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

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value})
  }
  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and passowrd</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type="text" 
                 value={this.state.email} ={this.handleChange} required/>
          <label>Email</label>

          <FormInput name='password' type="password" 
                 value={this.state.password} ={this.handleChange} required/>
          <label>Passoword</label>

          <input type="submit" value='Submit Form'/>
        </form>
      </div>
      );
  }
}

export default SignIn;