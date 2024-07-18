"use client"
import Link from "next/link"
import styles from './CheckoutButton.module.css'

export default function CheckoutButton() {

  return(
    <div className={styles.btn_container}>
      <button className={styles.btn}><Link className={styles.btn_link} href="/checkout">Proceed to Checkout</Link></button>
    </div>
  )
}