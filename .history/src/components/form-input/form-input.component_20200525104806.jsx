import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
  <div className="group">
    <input type="text" className="form-input" onChange={handleChange} {...otherProps}/>
    {
      label ? <label></label> : null
    }
  </div>
)