"use client"

import { createContext } from "react"
import { useState } from "react"

export const ShoppingCartContext = createContext({})

export function ShoppingCartContexttProvider(props) {
  const [ cartContent, setCartContent ] = useState({})

  const handleChange = (item) => {
    setCartContent(item)
  }
  
  return (
    <ShoppingCartContext.Provider value={{cartContent, handleChange}}>
      {props.children}
    </ShoppingCartContext.Provider>
  )
}



