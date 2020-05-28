import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
    <div {...otherProps}></div>
  </button>
);

export default CustomButton;