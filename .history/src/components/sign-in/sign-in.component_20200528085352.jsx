import React, {Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
          <FormInput name='email' type="text" label='email'
                 value={this.state.email} handleChange={this.handleChange} required/>

          <FormInput name='password' type="password" label='password'
                 value={this.state.password} handleChange={this.handleChange} required/>
          div.button
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGooogleSignIn> Sign In with Google </CustomButton>
        </form>
      </div>
      );
  }
}

export default SignIn;