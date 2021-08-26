import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/index'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'

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
          <div>Nome: {actualPokemon?.name}</div>
          <img src={actualPokemon.img?.front} alt={actualPokemon?.name} />
          <img src={actualPokemon.img?.back} alt={actualPokemon?.name} />
          <div>
            <p>Poderes</p>
            <p>HP: {actualPokemon.power?.hp}</p>
            <p>Attack: {actualPokemon.power?.attack}</p>
            <p>Defense: {actualPokemon.power?.defense}</p>
            <p>Special Attack: {actualPokemon.power?.specialAttack}</p>
            <p>Special Defense: {actualPokemon.power?.specialDefense}</p>
            <p>Speed: {actualPokemon.power?.speed}</p>
          </div>
          <div>
            <p>Tipos</p>
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
