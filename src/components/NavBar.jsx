const Navbar = ({ pokemonList, setPokemonIndex }) => {
	
	
	const handleClick = (id) => {
		
        setPokemonIndex(id);
	};
 
	return (
        <div>
             {pokemonList.map((pokemon, index) => {
                return (
                <button key={index} onClick ={() => handleClick(index)}>{pokemon.name}</button>
                )
             })}
        </div>
		
	);
};

export default Navbar;