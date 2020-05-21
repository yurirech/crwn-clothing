import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss'

const Header = () => (
  <div className="header">
    <Link to='/'>
      Logo.logo
    </Link>
  </div>
)

export default Header;