import React from 'react';
import useCharacters from '../hooks/useCharacters';
import './Characters.css';

const Character = ({ name, origin, image, species }) => {
	return (
		<div className='character'>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<p>Origin: {origin.name}</p>
			<p>species: {species}</p>
		</div>
	);
};

const Characters = () => {
	const { getCharacters } = useCharacters();
	const { data: characters, isLoading, isError, error } = getCharacters;

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div>
			<h1>Characters</h1>
			<div className='container'>
				{characters.results.map((character) => (
					<Character {...character} />
				))}
			</div>
		</div>
	);
};

export default Characters;
