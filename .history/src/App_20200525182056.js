import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSigUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import auth from 

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSigUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
