"use client"

import { createContext } from "react"
import { useState } from "react"

export const LoginContext = createContext({})

export function LoginContextProvider(props) {
  const [ loginDetails, setLoginDetails ] = useState({})

  const handleChange = (user) => {
    setLoginDetails(user)
  }
  
  return (
    <LoginContext.Provider value={{loginDetails, handleChange}}>
      {props.children}
    </LoginContext.Provider>
  )
}



