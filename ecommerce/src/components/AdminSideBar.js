"use client"
import Link from "next/link"
import styles from './AdminSideBar.module.css'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';

export default function AdminSideBar() {

  const [open, setOpen] = useState(false);

  function toggleDrawer() {
    setOpen(!open);
  }

  return (
    <>
      <MenuIcon className={styles.mobileNav} sx={{fontSize: "6rem"}} onClick={toggleDrawer}/>
      <Drawer className={styles.drawer} open={open} onClose={toggleDrawer} variant="temporary">
        <h3 className={`${styles.drawer_title} ${styles.operations}`}>OPERATIONS</h3>
        <h4 className={`${styles.drawer_subtitle} ${styles.headings}`}>INVENTORY</h4>
          <Link className={styles.drawer_menu} href="/admin/inventory">Goods Receipt</Link>
        <h4 className={`${styles.drawer_subtitle} ${styles.headings}`}>PRODUCT</h4>
          <Link className={styles.drawer_menu} href="/admin/create/product">Create new product</Link><br />
          <Link className={styles.drawer_menu} href="/admin/edit/product">Update/Delete product</Link>
        <h4 className={`${styles.drawer_subtitle} ${styles.headings}`}>SUPPLIER</h4>
          <Link className={styles.drawer_menu} href="/admin/create/supplier">Create new supplier</Link><br />
          <Link className={styles.drawer_menu} href="/admin/edit/supplier">Update/Delete supplier</Link><br />
        <Link className={`${styles.drawer_menu} ${styles.homelink}`} href="/admin/dashboard">Admin dashboard</Link>
      </Drawer>
    <aside className={styles.aside}>
      <h3 className={styles.operations}>OPERATIONS</h3>
      <h4 className={styles.headings}>INVENTORY</h4>
        <Link className={styles.link} href="/admin/inventory">Goods Receipt</Link>
      <h4 className={styles.headings}>PRODUCT</h4>
        <Link className={styles.link} href="/admin/create/product">Create new product</Link><br />
        <Link className={styles.link} href="/admin/edit/product">Update/Delete product</Link>
      <h4 className={styles.headings}>SUPPLIER</h4>
        <Link className={styles.link} href="/admin/create/supplier">Create new supplier</Link><br />
        <Link className={styles.link} href="/admin/edit/supplier">Update/Delete supplier</Link><br />
      <Link className={styles.homelink} href="/admin/dashboard">Admin dashboard</Link>
    </aside>
    </>
  )
}