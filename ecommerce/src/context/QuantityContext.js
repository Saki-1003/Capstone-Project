"use client"

import { createContext } from "react"
import { useState } from "react"

export const QuantityContext = createContext({})

export function QuantityContextProvider(props) {
  const [ quantity, setQuantity ] = useState([])

  const handleChange = (quantity) => {
    setQuantity(quantity)
  }
  
  return (
    <QuantityContext.Provider value={{quantity, handleChange}}>
      {props.children}
    </QuantityContext.Provider>
  )
}



