import React from 'react';
import BusinessItem from './BusinessItem';

export default function BusinessesList(props) {
  const businessesEl = props.businesses.map((item, i) => {
    return (
      <BusinessItem key={`${item.name} + ${i}`} name={item.name} display_phone={item.display_phone} image_url={item.image_url} price={item.price} rating={item.rating} />
    );
  });
  return (
    <div>{businessesEl}</div>
  );
}
