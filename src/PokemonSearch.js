import { useState } from 'react';
import homer from './spinner.gif';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('squirtle');
  const [searchBy, setSearchBy] = useState('pokemon');
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
    // set the loading state to true
    setLoading(true);

        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    // const endpointURL = `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchBy}=${search}`;
    const endpointURL = `/.netlify/functions/pokemon?${searchBy}=${search}`;
    const response = await fetch(endpointURL);

        // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    // console.log(json);
    setPokemon(json.results);

    setLoading(false);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokedex
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input onChange={e => setSearch(e.target.value)} />
        <select onChange={e => setSearchBy(e.target.value)}>
          <option value='pokemon'>Search by Name</option>
          <option value='type_1'>Search by Type</option>
          <option value='generation_id'>Search by Generation</option>
        </select>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {loading ? <img src={homer} /> : <PokemonList pokemon={pokemon} />}
    </section>
  );

}
