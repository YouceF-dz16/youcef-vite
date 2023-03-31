import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'



function App() {
  
  
  const pokemon = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

    const [pokemons, setpokemons] = useState(0);
    const Suivant = () => {setpokemons (pokemons +1)};
    const precedent = () => {setpokemons (pokemons -1)};
      
  return (
    <div>

      <PokemonCard pokemon ={pokemon[pokemons]}  />
      {pokemons > 0 ? <button onClick={precedent}>Précedent</button> : ""};
      {pokemons < pokemon.length -1 ? <button onClick={Suivant}>Suivant</button>: ""} ;   
    
    </div>
 
  );
}

export default App
