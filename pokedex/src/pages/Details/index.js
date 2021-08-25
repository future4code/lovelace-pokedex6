import React, { useEffect, useState } from 'react'
import useGetDetails from '../../services/useGetDetails'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/index'
import { useHistory } from 'react-router-dom'

const Details = () => {
  const history = useHistory()
  const { details, getDetails, error } = useGetDetails()
  const pathParams = useParams()

  useEffect(() => {
    getDetails(pathParams.name)
  }, [])

  return (
    <>
      <Header
        buttonName='Voltar'
        title={pathParams.name}
        onClickButton={() => history.push('/')}
        onClickButton2={() => history.push('/pokedex')}
        button2Name='Ir para a Pokedex'
      />
      {!error ? (
        <>
          <div>Nome: {details?.name}</div>
          <img src={details.img?.front} alt={details?.name} />
          <img src={details.img?.back} alt={details?.name} />
          <div>
            <p>Poderes</p>
            <p>HP: {details.power?.hp}</p>
            <p>Attack: {details.power?.attack}</p>
            <p>Defense: {details.power?.defense}</p>
            <p>Special Attack: {details.power?.specialAttack}</p>
            <p>Special Defense: {details.power?.specialDefense}</p>
            <p>Speed: {details.power?.speed}</p>
          </div>
          <div>
            <p>Tipos</p>
            <p>
              {details.types?.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </p>
          </div>
          <div>
            <p>Principais ataques</p>
            <p>
              {details.moves?.map((move) => (
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
