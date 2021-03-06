import React from 'react';
import { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils'

// This is how to import SVG into React
import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({currentUser}) => (
  <div className="header">
    <Link to='/'>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? (
          <div className="option" onClick={() =>}></div>
        )
      }
    </div>
  </div>
)

export default Header;