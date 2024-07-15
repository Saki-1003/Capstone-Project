"use client"
import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import OrderConfirmationListItem from "@/components/OrderConfirmationItemList"
import ShippingAddressForm from "@/components/form/ShippingAddressForm"
import styles from '../page.module.css'

export default function CheckoutPage() {
  const {cartContent} = useContext(ShoppingCartContext)
  console.log(cartContent)
  const itemsInCart = cartContent.length && cartContent.map((product)=><OrderConfirmationListItem product={product} />)

  const subTotal = cartContent.map((product)=> product.quantity*product.sell_price)
  const totalAmount = subTotal.reduce((accu, curr) => accu + curr, 0)

  return(
    <main>
      <div className={styles.div_flexbox}>
        <section className={styles.checkout_side}>
          <h2 className={styles.order_confirmation}>Order Confirmation</h2>
          {itemsInCart}
          <p className={styles.total}>Total amount:</p> 
          <p className={styles.amount}>NZD {totalAmount}</p>
        </section>
        <section  className={styles.checkout_section}>
          <ShippingAddressForm />       
        </section>
      </div>
    
     </main>
  )
}