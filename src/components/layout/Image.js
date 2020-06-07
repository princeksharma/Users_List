import React, { Fragment } from 'react';
import image from './image001.png';

const Image = () => (
  <Fragment>
    <img
      src={image}
      alt='Decision Point'
      style={{ width: '100px', margin: 'auto' }}
    />
  </Fragment>
);

export default Image;
