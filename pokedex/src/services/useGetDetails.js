import React, { useState } from 'react'
import axios from 'axios'

const useGetDetails = () => {
  const [details, setDetails] = useState({})
  const [error, setError] = useState(undefined)

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  let response
  const getDetails = async (name) => {
    try {
      response = await axios.get(`${baseUrl}${name}`)
    } catch (err) {
      setError(err)
    } finally {
      const spritesEssentials = response.data.sprites
      delete spritesEssentials.other
      delete spritesEssentials.versions
      setDetails({
        name: response.data.name,
        power: {
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          specialAttack: response.data.stats[3].base_stat,
          specialDefense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
        },
        types: response.data.types.map((index) => index.type.name),
        moves: response.data.moves.slice(0, 5).map((index) => index.move.name),
        sprites: spritesEssentials,
      })
    }
  }

  return { getDetails, details, error }
}

export default useGetDetails
