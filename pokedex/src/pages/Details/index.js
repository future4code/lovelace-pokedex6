import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/index'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'

const Details = () => {
  const { globalDetails } = React.useContext(GlobalContext)

  const [actualPokemon, setActualPokemon] = useState({})

  const history = useHistory()
  const { name } = useParams()

  useEffect(() => {
    console.log(globalDetails)
    if (globalDetails.length > 0) {
      console.log(globalDetails)
      setActualPokemon(
        globalDetails.filter((pokemon) => pokemon.name === name)[0]
      )
    }
  }, [globalDetails])


  return (
    <>
      <Header
        buttonName='Voltar'
        title={name}
        onClickButton={() => history.push('/')}
        onClickButton2={() => history.push('/pokedex')}
        button2Name='Ir para a Pokedex'
      />
      {actualPokemon.name ? (
        <>
          <div>Nome: {actualPokemon.name}</div>
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
