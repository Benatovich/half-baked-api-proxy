import React from 'react';
import PokemonItem from './PokemonItem';

export default function PokemonList(props) {
  const pokemonEl = props.pokemon.map((item, i) => {
    return (
      <PokemonItem key={`${item.pokemon} + ${i}`} pokemon={item.pokemon} type_1={item.type_1} type_2={item.type_2} generation_id={item.generation_id} species_id={item.species_id} url_image={item.url_image} />
    );
  });
  return (
    <div>
      {pokemonEl}
    </div>
  );
}
