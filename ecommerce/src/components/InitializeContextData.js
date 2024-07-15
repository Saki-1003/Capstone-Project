"use client"

import { useContext, useEffect } from "react"
import { LoginContext } from "@/context/LoginContext"
import { WishlistContext } from "@/context/WishlistContext"
import { getWishlistItems } from "@/backend/db_query/wishlist"
import { getProducts } from "@/backend/db_query/product"

export default function InitializeContextData() {
  const {setAdded} = useContext(WishlistContext)
  const {loginDetails} = useContext(LoginContext)

  useEffect(() => {
    async function getData() {
      const products = await getProducts()
      const wishlistItems = await getWishlistItems()
      setAdded(products.filter((product)=>wishlistItems.find((item)=>item.ProductId===product.ProductId && item.UserId === loginDetails.UserId)))

    }
    getData()
  },[loginDetails])

  return null
}