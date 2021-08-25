import { useState } from 'react'
import axios from 'axios'

const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(undefined)

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=5&limit=16'

  let response
  const getPokemons = async () => {
    try {
      response = await axios.get(baseUrl)
    } catch (err) {
      setError(err)
    } finally {
      setPokemons(response.data.results.map((pokemon)=>pokemon.name))
    }
  }

  return {getPokemons, pokemons, error}
}

export default useGetPokemons
