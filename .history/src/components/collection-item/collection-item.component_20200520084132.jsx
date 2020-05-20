import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({id, name,price, imageUrl}) => (

  <div className="collection-item">
    <div style={{backGroundImage: `url(${imageUrl})`}} className="image">
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  </div>
)

export default CollectionItem;