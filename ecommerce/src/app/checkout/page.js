"use client"
import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import OrderConfirmationListItem from "@/components/OrderConfirmationItemList"
import ShippingAddressForm from "@/components/form/ShippingAddressForm"
import styles from '../page.module.css'

export default function CheckoutPage() {
  const {cartContent} = useContext(ShoppingCartContext)
  console.log(cartContent)
  const itemsInCart = Object.keys(cartContent).length && cartContent.map((product)=><OrderConfirmationListItem product={product} />)

  

  return(
    <main className={styles.main_flexbox}>
      <section className={styles.checkout_side}>

      </section>

      <section  className={styles.checkout_section}>
       <ShippingAddressForm />
        
      </section>
   
  </main>
  )
}