import React from 'react'

export const GlobalContext = React.createContext({})

export function GlobalContextProvider({children}) {
  const [globalDetails, setGlobalDetails] = React.useState([])

  return (
    <GlobalContext.Provider value={{
      globalDetails,
      setGlobalDetails,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
