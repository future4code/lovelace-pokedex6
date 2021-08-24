import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/index'
import useGetPokemons from '../../services/useGetPokemons'
import useGetDetails from '../../services/useGetDetails'

const Home = () => {
  const { pokemons, getPokemons } = useGetPokemons()
  const { details, getDetails } = useGetDetails()
  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() => {
    getPokemons()
    getDetails('3')
  }, [])

  details && console.log(details)

  // const detalhes = pokemons.map((pokemon) => {
  //   getDetails(pokemon.url)
  //   return details
  // })


  const mostraPokemons = pokemons.map((pokemon) => {
    return <Card pokemon={pokemon} />

  })


  // pokemons && console.log(pokemons)

  return (
    <div>
      {/* <Card pokemon={pokemons[6]} /> */}
      {mostraPokemons}
    </div>
  )
}

export default Home
