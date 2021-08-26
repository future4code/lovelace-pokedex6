import React, { useState, useEffect } from 'react'
import Router from './routes'
import useGetPokemons from './services/useGetPokemons'

import useGetDetails from './services/useGetDetails'

import { GlobalContext } from './contexts/GlobalContext'

function App() {
  const { setGlobalDetails } = React.useContext(GlobalContext)

  const { pokemons, getPokemons } = useGetPokemons()
  const { getDetails } = useGetDetails()
  const [pokemonsDetails, setpokemonsDetails] = useState([])

  useEffect(() => {
    if (pokemons.length > 0) {
      ;(async () => {
        let pokemonsCopy = []
        for (const pokemon of pokemons) {
          let result = await getDetails(pokemon)
          pokemonsCopy = [...pokemonsCopy, result]
        }
        setpokemonsDetails(pokemonsCopy)
      })()
    }
  }, [pokemons])

  useEffect(() => {
    if (pokemonsDetails.length > 0) {
      setGlobalDetails(pokemonsDetails)
    }
  }, [pokemonsDetails])

  useEffect(() => {
    getPokemons()
  }, [])
  return <Router />
}

export default App
