import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/index'
import useGetPokemons from '../../services/useGetPokemons'
import useGetDetails from '../../services/useGetDetails'
import { PokemonGrid } from './styles'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const { pokemons, getPokemons } = useGetPokemons()
  const { details, getDetails } = useGetDetails()

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <Header
        buttonName='Ir para Pokédex'
        title='Lista de Pokémons'
        onClickButton={() => history.push('/pokedex')}
      />
      <PokemonGrid>
        {pokemons.map((pokemon) => (
          <Card key={pokemon} pokemon={pokemon} />
        ))}
      </PokemonGrid>
    </>
  )
}

export default Home
