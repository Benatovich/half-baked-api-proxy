import React from 'react';
import PokemonItem from './PokemonItem';

export default function PokemonList({ pokemon }) {
  const pokemonEl = pokemon.map((monster, i) => {
    return (
      <PokemonItem key={`${monster.pokemon} + ${i}`} name={pokemon.name} />
    );
  });
  return (
    <div>
      {pokemonEl}
    </div>
  );
}
