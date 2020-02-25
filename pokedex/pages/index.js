import Link from "next/link";
import Layout from "../components/layout";
import axios from "axios";
import Sidebar from "../components/sidebar";
import getInitialProps from '../helpers/getInitialProps'
import { getPokemons } from '../helpers/api'

const Index = props => {
  return <div></div>;
};

Index.getInitialProps = async function() {
  let props = await getInitialProps({
    pokemons: getPokemons()
  })

  return props
};

export default Index;
