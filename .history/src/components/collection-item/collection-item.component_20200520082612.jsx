import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name,price, imageUrl}) => (

  <div className="collction-item">
    <div style={{backGroundImage: `url(${imageUrl})`}} className="image">
      <div className="collection-footer">
        <span className="name">{}</span>
        <span className="price"></span>
      </div>
    </div>
  </div>
)