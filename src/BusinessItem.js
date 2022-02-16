import React from 'react';

export default function BusinessItem({ name, display_phone, image_url, price, rating, url }) {
  return (
    <div className='business-item'>
      <h3 className='name'>{name}</h3>
      <p>{image_url}</p>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{display_phone}</p>
      <p>{url}</p>
    </div>
  );
}
