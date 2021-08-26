import React from 'react'
import Header from '../../components/Header/index'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import Card from '../../components/Card/index'
import { PokemonGrid } from '../Home/styles'

const Pokedex = () => {
  const { pokedex, setPokedex, globalDetails, setGlobalDetails } =
    React.useContext(GlobalContext)
  const history = useHistory()
  React.useEffect(() => {
    console.log(pokedex)
  }, [])

  const addPokemon = (pokemon) => {
    setGlobalDetails([...globalDetails, pokemon])
    setPokedex(pokedex.filter((element) => element !== pokemon))
  }

  return (
    <>
      <Header
        buttonName='Voltar para a lista de Pokémons'
        title='Pokédex'
        onClickButton={() => history.push('/')}
      />
      <PokemonGrid>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemon={pokemon}
            addPokemon={addPokemon}
            buttonName='Remover da Pokédex'
          />
        ))}
      </PokemonGrid>
    </>
  )
}

export default Pokedex
