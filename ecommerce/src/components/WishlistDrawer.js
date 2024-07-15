'use client'
import { useState, useContext } from 'react'
import { WishlistContext } from '@/context/WishlistContext';
import WishlistProductItem from './WishlistProduct';
import styles from './WishlistDrawer.module.css'

import { Drawer } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function WishlistDrawer() {
  const [open, setOpen] = useState(false);
  const {added, handleChange, deleteProduct} = useContext(WishlistContext)
    
  function toggleDrawer() {
    setOpen(!open);
  }
  const products = added.map((product)=> <WishlistProductItem product={product} />)
  
  return (
    <>
      <FavoriteBorderIcon sx={{fontSize: "2.5rem"}} onClick={toggleDrawer}/>
      <Drawer className={styles.wishlist_drawer} open={open} onClose={toggleDrawer} variant="temporary">
        <h1 className={styles.wishlist}>Wishlist</h1>
        {products}
        
        
      </Drawer>
       
    </>
  )
}
