import React from 'react';
import { type } from 'superagent/lib/utils';

export default function PokemonItem({ pokemon, type_1, generation_id, species_id }) {
  return (
    <div className='pokemon-item'>
      <h3 className='name'>{pokemon}</h3>
      <p className='type'>{type_1}</p>
      <p className='generation'>Generation {generation_id}</p>
      <p className='id-number'>{species_id}</p>
    </div>
  );
}
