import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title,info, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <h2 className='info'>{info}</h2>
      <span className='subtitle'>BUY NOW</span>
    </div>
  </div>
);

export default MenuItem;