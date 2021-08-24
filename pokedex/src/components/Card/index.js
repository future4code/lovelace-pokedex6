import React from 'react'
import Pokemonzinho from '../../img/pokemonzinho.jpg'
import { PokemonCard } from './styles'

const Card = (props) => {
  return (
    <PokemonCard>
      {<h3>{props.pokemon.name}</h3>}
      <img src={Pokemonzinho} alt='Bulbassauro' />
      <div>
        <button>Adicionar à Pokedex</button>
        <button>Mais detalhes</button>
      </div>
    </PokemonCard>
  )
}

export default Card
