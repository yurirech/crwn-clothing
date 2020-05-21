import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/original.svg'

import './header.styles.scss'

const Header = () => (
  <div className="header">
    <Link to='/' />
  </div>
)