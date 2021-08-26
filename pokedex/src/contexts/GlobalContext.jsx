import React from 'react'

export const GlobalContext = React.createContext({})

export function GlobalContextProvider({children}) {
  const [globalDetails, setGlobalDetails] = React.useState([])
  const [pokedex, setPokedex] = React.useState([])

  return (
    <GlobalContext.Provider value={{
      globalDetails,
      setGlobalDetails,
      pokedex,
      setPokedex,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
