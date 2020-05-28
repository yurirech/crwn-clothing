import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => (
  <button className={`${isGooogleSignIm} "custom-button"`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;