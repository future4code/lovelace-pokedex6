import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/index'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { DetailsTipos, PokemonDetails, TextDetails } from './styles'

const Details = () => {
  const { globalDetails, pokedex } = React.useContext(GlobalContext)

  const [actualPokemon, setActualPokemon] = useState({})

  const history = useHistory()
  const { name } = useParams()

  const findPokemon = (state) => {
    return state.filter((pokemon) => pokemon.name === name)[0]
  }

  useEffect(() => {
    if (findPokemon(globalDetails)) {
      setActualPokemon(findPokemon(globalDetails))
    } else {
      setActualPokemon(findPokemon(pokedex))
    }
  }, [globalDetails])

  return (
    <>
      <Header
        buttonName='Ir para a lista de Pokémons'
        title={name}
        onClickButton={() => history.push('/')}
        onClickButton2={() => history.push('/pokedex')}
        button2Name='Ir para a Pokedex'
      />
      {actualPokemon.name ? (
        <>
          <PokemonDetails>Nome: {actualPokemon?.name}</PokemonDetails>
          <img src={actualPokemon.img?.front} alt={actualPokemon?.name} />
          <img src={actualPokemon.img?.back} alt={actualPokemon?.name} />
          <PokemonDetails>
            <TextDetails>Poderes</TextDetails>
            <TextDetails>HP: {actualPokemon.power?.hp}</TextDetails>
            <TextDetails>Attack: {actualPokemon.power?.attack}</TextDetails>
            <TextDetails>Defense: {actualPokemon.power?.defense}</TextDetails>
            <TextDetails>Special Attack: {actualPokemon.power?.specialAttack}</TextDetails>
            <TextDetails>Special Defense: {actualPokemon.power?.specialDefense}</TextDetails>
            <TextDetails>Speed: {actualPokemon.power?.speed}</TextDetails>
          </PokemonDetails>
          <div>
            <DetailsTipos>Tipos</DetailsTipos>
            <p>
              {actualPokemon.types?.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </p>
          </div>
          <div>
            <p>Principais ataques</p>
            <p>
              {actualPokemon.moves?.map((move) => (
                <li key={move}>{move}</li>
              ))}
            </p>
          </div>
        </>
      ) : (
        <>
          <p>Pokémon não encontrado</p>
        </>
      )}
    </>
  )
}

export default Details
