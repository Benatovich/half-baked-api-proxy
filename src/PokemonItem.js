import React from 'react';

export default function PokemonItem({ pokemon, type_1, type_2, generation_id, species_id, url_image }) {
  return (
    <div className='poke-item'>
      <h3 className='name'>Name: {pokemon}</h3>
      <img className='image' src={url_image} />
      <p className='type'>Type 1: {type_1}</p>
      <p className='type'>Type 2: {type_2}</p>
      <p className='generation'>Generation: {generation_id}</p>
      <p className='id-number'>Number: {species_id}</p>
      <hr></hr>
    </div>
  );
}
