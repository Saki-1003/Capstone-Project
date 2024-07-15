"use client"

import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { getWishlistItems } from '@/backend/db_query/wishlist'
import { getProducts } from '@/backend/db_query/product'

export const WishlistContext = createContext({})

export function WishlistContextProvider(props) {
  const [ added, setAdded ] = useState([])

  const handleChange = (item) => {
    setAdded([...added, item])
  }

  const deleteProduct = (productID) => {
    setAdded(added.filter(product => product.ProductId !== productID))
  }

  console.log(added)

  return(
    <WishlistContext.Provider value={{added, handleChange, deleteProduct, setAdded}}>
      {props.children}
    </WishlistContext.Provider>
  )
}