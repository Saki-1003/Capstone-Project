'use client'
import styles from './header.module.css'
import Link from 'next/link'
import React from 'react';

import NavDrawer from './NavDrawer';
import WishlistDrawer from './WishlistDrawer';


export default function Header() {

  return(
    
    <header className={styles.header}>
      <Link href='/'>
        <h1 className={styles.h1}>
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48">
            <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455a10.108 10.108 0 0 1 0 20.217c-5.388 0-16.96-1.92-20.079-7.759"/>
            <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455H10.729a6.23 6.23 0 1 0 3.874 11.072l.017.021Z"/>
            <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="m13.971 34.794l-8.264 2.859l4.226-6.74m13.801-7.873c-1.921 3.472-1.738 11.395 3.997 15.538M17.383 27.557c-.74 1.52.053 6.2 2.313 9.595"/>
            <circle cx="31.962" cy="25.732" r="2.79" fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="41.448" cy="15.309" r="2.052" fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="34.985" cy="11.38" r="2.052" fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round"/>
            <path fill="none" stroke="#6495ED" strokeLinecap="round" strokeLinejoin="round" d="M33.26 18.99c.985-1.223 3.242-3.457 6.112-3.79m-8.795 3.271a8.93 8.93 0 0 1 2.733-5.932"/>
          </svg>
          Honey Buzz
        </h1>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles["list-wrapper"]}>
          <Link href="/product" className={styles.navList}>PRODUCT</Link>
          <Link href="/cart" className={styles.navList}>SHOPPING CART</Link>
          <Link href="/user/login" className={styles.navList}>LOGIN</Link>
        </ul>
        <p className={styles.wishlist}><WishlistDrawer />Wishlist</p>
      </nav>

      <nav className={styles.mobileNav}>
        <NavDrawer />
      </nav>

    </header>

    
  )
}
