import React from 'react'
import { PokemonCard } from './styles'
import { useHistory } from 'react-router-dom'

const Card = (props) => {
  const history = useHistory()

  return (
    <PokemonCard>
      <h3>
        {props.pokemon?.name}
        </h3>
      <img src={props.pokemon?.img.front} alt={props.pokemon?.name} />

      <div>
        <button>Adicionar à Pokedex</button>
        <button onClick={() =>history.push(`/pokemon/${props.pokemon.name}`)}>Mais detalhes</button>
      </div>
    </PokemonCard>
  )
}

export default Card
