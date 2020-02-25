const axios = require('axios')

const getPokemons = async (context) => {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    return response.data
}

const getPokemonById = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response.data
}

const getInitialProps = async obj => {
    let promises = Object.keys(obj).map(key => {
        return obj[key]
    })

    console.log(promises)
    let results = await Promise.all(promises)
    let props = {}
    Object.keys(obj).map((key, index) => {
        props[key] = results[index]
    })

    return props
};


const run = async () => {
    let props = await getInitialProps({
        pokemons: getPokemons(),
        pokemon: getPokemonById(1) 
    })
    
    console.log(props)
}

run()

// Component.getInitialProps = context => {

//     // const { id } = context.query;

//     let props = await getInitialProps({
//         pokemons: getPokemons(),
//         pokemon: getPokemonById() 
//     })

//     return props
// }
