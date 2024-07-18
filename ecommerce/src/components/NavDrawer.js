'use client'
import { useState } from 'react'
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WishlistDrawer from './WishlistDrawer';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import styles from './NacDrawer.module.css'


export default function NavDrawer({children}) {

  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <MenuIcon sx={{fontSize: "8rem"}} onClick={toggleDrawer}/>
      <Drawer className={styles.drawer} open={open} onClose={toggleDrawer} variant="temporary">
        <Link className={styles.drawer_menu} href='/user/login'><PersonOutlineOutlinedIcon style={{fontSize:"4rem",paddingRight: "2px", transform: "translateY(25%)"}} />LOGIN</Link>
        <Link className={styles.drawer_menu} href='/product'><StorefrontOutlinedIcon style={{fontSize:"4rem",paddingRight: "2px", transform: "translateY(25%)"}} />PRODUCT</Link>
        <li className={styles.drawer_menu_wishlist}><WishlistDrawer className={styles.wishlistDrawer} />WISHLIST</li>
        <Link className={styles.drawer_menu} href='/cart'><ShoppingCartOutlinedIcon style={{fontSize:"4rem",paddingRight: "2px", transform: "translateY(25%)"}} />SHOPPING CART</Link>
      </Drawer>
    </>
  )
}
