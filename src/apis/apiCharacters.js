import axios from 'axios';

export const apiCharatacter = async () => {
	return axios.get('https://rickandmortyapi.com/api/character');
};

export const apiGoodCharatacter = async () => {
	return axios.get('https://rickandmortyapi.com/api/character');
};

export const apiBadCharatacter = async () => {
	return axios.get('https://rickandmortyapi.com/api/character');
};
