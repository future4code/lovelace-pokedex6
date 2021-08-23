import React, { useState } from 'react'
import axios from 'axios'

const useGetDetails = () => {
  const [details, setDetails] = useState([])
  const [error, setError] = useState(undefined)

  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

  let response
  const getDetails = async (name) => {
    try {
      response = await axios.get(`${baseUrl}${name}`)
    } catch (err) {
      setError(err)
    } finally {
      setDetails()
    }
  }

  return {getDetails, details, error}
}

export default useGetDetails
