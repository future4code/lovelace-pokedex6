import React from 'react'
import { PokemonCard } from './styles'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'

const Card = ({ pokemon, addPokemon, buttonName }) => {
  const {  } =
    React.useContext(GlobalContext)

  const history = useHistory()

  return (
    <PokemonCard>
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.img.front} alt={pokemon?.name} />
      <div>
        <button
          onClick={() => addPokemon(pokemon)}
        >
          {buttonName}
        </button>
        <button onClick={() => history.push(`/pokemon/${pokemon.name}`)}>
          Mais detalhes
        </button>
      </div>
    </PokemonCard>
  )
}

export default Card
