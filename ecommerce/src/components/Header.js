'use client'
import styles from './header.module.css'
import Link from 'next/link'
import React from 'react';
import { useRef } from 'react'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavDrawer from './NavDrawer';

export default function Header() {

  const visibilityRef = useRef()

  const products = ["Clover Honey", "Manuka Honey", "Blackcurrant Honey", "Blue Borage Honey", "Comb Honey", "Thyme Honey"]
  
  function handleMouseEnter(){
    visibilityRef.current.style.display= 'block'
  }

  function handleMouseLeave() {
    visibilityRef.current.style.display= 'none'
  }

  return(
  
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <img src="/arcticons--honeygain_black.png" />
        Online Shop
      </h1>

      <nav className={styles.nav}>
        <ul className={styles["list-wrapper"]}>
          <div>
            <Link href="#" className={styles.navList}
              onMouseEnter={handleMouseEnter}
            >PRODUCT</Link>
            <ul className={styles.dropdown} ref={visibilityRef}  onMouseLeave={handleMouseLeave}>
              {products.map((product) => <li className={styles["dropdown-item"]}><Link href="#">{product}</Link></li>)}
            </ul> 
          </div>

          <Link href="#" className={styles.navList}>NEWS</Link>
          <Link href="#" className={styles.navList}>GALLERY</Link>
          <Link href="#" className={styles.navList}>ABOUT</Link>
          <Link href="#" className={styles.navList}>CONTACT</Link>
        </ul>
      </nav>
      <nav className={styles.mobileNav}>
        <NavDrawer />
      </nav>

      <ul className={styles.navIcons}>
          <Link className={styles["material-icons"]} href="/login"><PersonOutlineOutlinedIcon sx={{fontSize:"2.5rem"}} /></Link>
          <Link className={styles["material-icons"]} href="#"><FavoriteBorderIcon sx={{fontSize:"2.5rem"}} /></Link>
          <Link className={styles["material-icons"]} href="#"><ShoppingCartOutlinedIcon sx={{fontSize:"2.5rem"}} /></Link>
      </ul>
 
    </header>

    
  )
}
