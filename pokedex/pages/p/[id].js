import axios from "axios";

import getInitialProps from '../../helpers/getInitialProps'
import { getPokemons, getPokemonById, getImage } from '../../helpers/api'

const Post = props => {
  let arraySprites = Object.values(props.pokemon.sprites);
  
  return (
    <div className="row">
      <div className="col-md-4 my-3">
        <div className="card">
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-uppercase">{props.pokemon.name}</h5>
            <p className="card-text">
              {props.pokemon.types.map((a, i) => {
                return <strong key={i}>| {a.type.name} | </strong>;
              })}
            </p>
            <a href="#" className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12 my-3">
            <h2>Views</h2>
          </div>

          {arraySprites.map((sprite, i) => {
            return <img src={sprite} key={i}></img>;
          })}

          <br />
        </div>
        <h5>Height</h5>
        <p>{props.pokemon.height}</p>

        <h5>Weight</h5>
        <p>{props.pokemon.weight}</p>

        <h5>Abilities</h5>
        <p>
          {props.pokemon.abilities.map(ability => {
            return ability.ability.name + " ";
          })}
        </p>
      </div>
    </div>
  );
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  
  let props = await getInitialProps({
    pokemons: getPokemons(),
    pokemon: getPokemonById(id),
    imageUrl: getImage(id)
  })

  return props
};


export default Post;
