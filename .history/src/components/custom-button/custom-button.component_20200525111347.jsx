import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...other}>
    {children}
  </button>
);

export default CustomButton;