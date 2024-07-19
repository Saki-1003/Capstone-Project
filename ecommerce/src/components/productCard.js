'use client'

import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState, useContext } from 'react'
import { WishlistContext } from '@/context/WishlistContext';
import Link from "next/link";
import { LoginContext } from '@/context/LoginContext';
import { createWishlistItem } from '@/backend/server_actions/wishlist';
import { deleteWishlistItem } from '@/backend/db_query/wishlist';
import { createCartItem } from '@/backend/server_actions/cart';
import styles from './productCard.module.css'


export default function ProductCard({product}) {
  const {added, handleChange, deleteProduct} = useContext(WishlistContext)
  const isAdded = !!added.find(item => item.ProductId == product.ProductId )
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  const [checked, setChecked] = useState(isAdded)
  const {loginDetails} = useContext(LoginContext)
  console.log(loginDetails)

  //Create/ Delete wishlist_item if the user has logged in
  const handleWishlistChange = async (e) => {
    if(!loginDetails.UserId) {
      setChecked(false)
      alert('Please login')
      return
    }
    const wishlistItem = {
      ProductId: product.ProductId, 
      UserId: loginDetails.UserId
    }
    if(e.target.checked) {
      handleChange(product)
      await createWishlistItem(wishlistItem)
    } else {
      deleteProduct(product.ProductId)
      await deleteWishlistItem(wishlistItem)
    }
    setChecked(!checked)
  }

  //Create cart_item 
  const handleAddToCart = async() => {
    if(!loginDetails.UserId) {
      alert('Please login')
      return
    }
    const cartItem = {
      ProductId: product.ProductId, 
      UserId: loginDetails.UserId
    }
    await createCartItem(cartItem)
  }


  return(
      <article className={styles.card}>
        <Link href={`/product/${product.ProductId}`}>
          <img className={styles.card_img} src={`/product${product.ProductId}.jpg`} />

          <div className={styles.card_body}>
            <h3 className={styles.title}>{product.product_title}</h3>
            <h5 className={styles.sell_price}>NZD {product.sell_price}</h5>
          </div>
          <p className={styles.card_text}>{product.summary}</p>
        </Link>
        <div>
          <Checkbox 
          {...label} 
          icon={<FavoriteBorder  />} 
          checkedIcon={<Favorite sx={{color:'#e91e63'}}/>} 
          checked={checked}
          onChange={handleWishlistChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }}}
          className={styles.checkbox}

          />
          <button className={styles.btn} onClick={handleAddToCart}>Add to cart</button>
        </div>
      </article>

  )
}