import axios from 'axios';
import { useQuery } from 'react-query';

export const apiCharatacter = async () => {
	const { data } = await axios.get(
		'https://rickandmortyapi.com/api/character'
	);
	return data;
};

const useCharacters = () => {
	const getCharacters = useQuery(['characters'], apiCharatacter, {
		onSuccess: (error) => {
			console.log(error);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const getWorld = useQuery(['characters'], apiCharatacter, {
		onSuccess: (error) => {
			console.log(error);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return {
		getWorld,
		getCharacters,
	};
};

export default useCharacters;
