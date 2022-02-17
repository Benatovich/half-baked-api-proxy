import React from 'react';

export default function BusinessItem({ name, display_phone, image_url, price, rating }) {
  return (
    <div className='business-item'>
      <h3 className='name'>{name}</h3>
      <img className='image' src={image_url} />
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      <p>{display_phone}</p>
      <hr></hr>
    </div>
  );
}
