'use client'
import styles from './header.module.css'
import Link from 'next/link'
import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { getProducts } from '@/backend/db_query/product';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavDrawer from './NavDrawer';
import WishlistDrawer from './WishlistDrawer';

export default function Header() {
  // const [products, setProducts] = useState({}) 
  const visibilityRef = useRef()
  
  // useEffect(() => {
  //   async function getData() {
  //     const productData = await getProducts() 
  //     console.log(productData)
  //     const productTitles = productData.map((product => product.product_title))
  //     setProducts(productTitles)
  //   }
  //   getData()
  // },[])

  const products = ["Clover Honey", "Manuka Honey", "Blackcurrant Honey", "Blue Borage Honey", "Comb Honey", "Thyme Honey"]
  console.log(products)
  
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
            <Link href="/product" className={styles.navList}
              onMouseEnter={handleMouseEnter}
            >PRODUCT</Link>
            <ul className={styles.dropdown} ref={visibilityRef}  onMouseLeave={handleMouseLeave}>
              {products.map((product) => <li key={product} className={styles["dropdown-item"]}><Link href="#">{product}</Link></li>)}
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
          <Link className={styles["material-icons"]} href="/user/login"><PersonOutlineOutlinedIcon sx={{fontSize:"2.5rem"}} /></Link>
          <Link className={styles["material-icons"]} href="#" >
            <WishlistDrawer />
          {/* <FavoriteBorderIcon sx={{fontSize:"2.5rem"}} /> */}
          </Link>
          <Link className={styles["material-icons"]} href="/cart"><ShoppingCartOutlinedIcon sx={{fontSize:"2.5rem"}} /></Link>
      </ul>
 
    </header>

    
  )
}
