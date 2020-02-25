const axios = require('axios')

export const getPokemons = async (context) => {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    return response.data.results
}

export const getPokemonById = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response.data
}

export const getImage = async (id) => {
    let padddedId = id.padStart(3, "0");
    return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + padddedId + ".png";
}