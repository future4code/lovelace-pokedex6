import React from 'react'
import Card from '../../components/Card/index'
import { PokemonGrid } from './styles'
import Header from '../../components/Header'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'

const Home = () => {
  const { setPokedex, pokedex, setGlobalDetails, globalDetails } =
    React.useContext(GlobalContext)
  const history = useHistory()

  const addPokemon = (pokemon) => {
    setPokedex([...pokedex, pokemon])
    setGlobalDetails(globalDetails.filter((element) => element !== pokemon))
  }

  return (
    <>
      <Header
        buttonName='Ir para Pokédex'
        title='Lista de Pokémons'
        onClickButton={() => history.push('/pokedex')}
      />
      <PokemonGrid>
        {globalDetails.length > 0 &&
          globalDetails.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemon={pokemon}
              addPokemon={addPokemon}
              buttonName='Adicionar à Pokédex'
            />
          ))}
      </PokemonGrid>
    </>
  )
}

export default Home
