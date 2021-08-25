import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/index'
import useGetPokemons from '../../services/useGetPokemons'
import { PokemonGrid } from './styles'
const Home = () => {
  const { pokemons, getPokemons } = useGetPokemons()

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <PokemonGrid>
      
      {pokemons.map((pokemon) => (
        <Card key={pokemon} pokemon={pokemon} />
      ))}
    </PokemonGrid>
  )
}

export default Home
