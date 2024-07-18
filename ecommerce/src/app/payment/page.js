"use client"
import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import OrderConfirmationListItem from "@/components/OrderConfirmationItemList"
import PaymentForm from "@/components/form/PaymentForm"
import styles from '../page.module.css'
import Footer from "@/components/Footer"
import Link from "next/link"

export default function PaymentPage() {
  const {cartContent} = useContext(ShoppingCartContext)
  console.log(cartContent)
  const itemsInCart = cartContent.length && cartContent.map((product)=><OrderConfirmationListItem key={product.ProductId} product={product} />)

  const subTotal = cartContent.length && cartContent.map((product)=> product.quantity*product.sell_price)
  const totalAmount = subTotal.length && subTotal.reduce((accu, curr) => accu + curr, 0)
  

  return(
    <>
    <main>
      <div className={styles.div_flexbox}>
        <section className={styles.checkout_side}>
          <h2 className={styles.order_confirmation}>Order Confirmation</h2>
          {itemsInCart}
          <p className={styles.total}>Total amount:</p> 
          <p className={styles.amount}>NZD {totalAmount}</p>
        </section>
        <section  className={styles.checkout_section}>
          <PaymentForm />     
        </section>
        <Link className={styles.link_to_cart} href="/checkout">Go back to previous page</Link> 
      </div>
    
     </main>
     <Footer />
     </>
  )
}