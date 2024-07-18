"use client"
import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import OrderConfirmationListItem from "@/components/OrderConfirmationItemList"
import ShippingAddressForm from "@/components/form/ShippingAddressForm"
import styles from '../page.module.css'
import Footer from "@/components/Footer"
import Link from 'next/link'

export default function CheckoutPage() {
  const {cartContent} = useContext(ShoppingCartContext)
  console.log(cartContent)
  const itemsInCart = cartContent.length && cartContent.map((product)=><OrderConfirmationListItem key={product.ProductId} product={product} />)

  const subTotal = cartContent.length && cartContent.map((product)=> product.quantity*product.sell_price)
  const totalAmount = subTotal.length && subTotal.reduce((accu, curr) => accu + curr, 0)

  return(
    <main>
      <div className={styles.div_flexbox}>
        <section className={styles.checkout_side}>
          <h2 className={styles.order_confirmation}>Order Confirmation</h2>
          {itemsInCart.length? itemsInCart: ""}
          <p className={styles.total}>Total amount:</p> 
          <p className={styles.amount}>NZD {totalAmount? totalAmount: ""}</p>
        </section>
        <section  className={styles.checkout_section}>
          <ShippingAddressForm /> 
          <Link className={styles.link_to_cart} href="/cart">Go back to shopping cart</Link>      
        </section>
      </div>
      <Footer />
    
     </main>
  )
}