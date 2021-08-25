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
      <img src={details.sprites?.front_default} alt={details?.name} />

      <div>
        <button>Adicionar à Pokedex</button>
        <button>Mais detalhes</button>
      </div>
    </PokemonCard>
  )
}

export default Card
