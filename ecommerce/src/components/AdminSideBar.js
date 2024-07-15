"use client"
import Link from "next/link"
import styles from './AdminSideBar.module.css'
import { usePathname } from "next/navigation"

export default function AdminSideBar() {

  const path = usePathname()

  return (
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
  )
}