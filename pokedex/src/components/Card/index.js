import React, { useEffect } from 'react'
import { PokemonCard } from './styles'
import { useHistory } from 'react-router-dom'
import useGetDetails from '../../services/useGetDetails'

const Card = (props) => {
  const history = useHistory()

  const { details, getDetails } = useGetDetails()
  useEffect(() => {
    getDetails(props.pokemon)
  }, [])
  return (
    <PokemonCard>
      <h3>{props.pokemon}</h3>
      <img src={details.img?.front} alt={details?.name} />

      <div>
        <button>Adicionar à Pokedex</button>
        <button onClick={() =>history.push(`/pokemon/${props.pokemon}`)}>Mais detalhes</button>
      </div>
    </PokemonCard>
  )
}

export default Card
