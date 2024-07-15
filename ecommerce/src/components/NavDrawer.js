'use client'
import { useState } from 'react'
import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function NavDrawer() {

  const [open, setOpen] = useState(false);
  const navMenu = ["product", "news", "gallery", "about", "contact"]
  const navIcon = [
    {title:"login", icon: <PersonOutlineOutlinedIcon style={{fontSize:"2.5rem",paddingRight: "2px", transform: "translateY(25%)"}} />},
    {title: "wishlist", icon: <FavoriteBorderIcon  style={{fontSize:"2.5rem", paddingRight: "3px", transform: "translateY(30%)"}} />},  
    {title: "cart", icon: <ShoppingCartOutlinedIcon  style={{fontSize:"2.5rem", paddingRight: "3px", transform: "translateY(25%)"}} />}
  ]
  
  function toggleDrawer() {
    setOpen(!open);
  }



  return (
    <>
      <MenuIcon sx={{fontSize: "3.5rem"}} onClick={toggleDrawer}/>
      <Drawer open={open} onClose={toggleDrawer} variant="temporary">
        {navIcon.map(item => <Link key={item.title} href="'/'+ {item.title}" style={{padding: 50}}>{item.icon}{item.title.toUpperCase()}</Link>)}
        <hr />
        {navMenu.map(item => <Link key={item} href="'/'+ {item}" style={{padding: 50}}>{item.toUpperCase()}</Link>)}
      </Drawer>
    </>
  )
}
