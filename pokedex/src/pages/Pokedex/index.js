import React from 'react'
import Header from "../../components/Header/index"
import {useHistory} from "react-router-dom"

const Pokedex = () => {
  const history = useHistory()

  return (
    <>
      <Header buttonName="Voltar para a lista de Pokémons" title="Pokédex" onClickButton={() => history.push ("/")} />
     
    </>
  )
}

export default Pokedex
