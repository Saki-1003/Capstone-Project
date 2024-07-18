"use client"
import Link from 'next/link';
import styles from './NavBarVertical.module.css'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WishlistDrawer from '../WishlistDrawer';


export default function NavBarVertical() {

  return (
     
    <header className={styles.header}>


      <nav className={styles.nav}>
        <ul className={styles.navIconList}>
          <Link className={styles["material-icons"]} href="/user/login"><PersonOutlineOutlinedIcon sx={{fontSize:"4rem"}}/></Link>
          <Link className={styles["material-icons"]} href="/product" ><StorefrontOutlinedIcon sx={{fontSize:"4rem"}} /></Link>
          <li className={styles["material-icons"]}><WishlistDrawer className={styles["material-icons"]} /></li>
          <Link className={styles["material-icons"]} href="/cart"><ShoppingCartOutlinedIcon sx={{fontSize:"4rem"}} /></Link>
        </ul>
      </nav>
 
    </header>
  )
}