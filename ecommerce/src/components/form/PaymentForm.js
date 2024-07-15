import { LoginContext } from "@/context/LoginContext"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import { useContext } from 'react'
import styles from './PaymentForm.module.css'
import { createOrder } from "@/backend/server_actions/order"



export default function PaymentForm(){
  const {loginDetails} = useContext(LoginContext)
  const {cartContent} = useContext(ShoppingCartContext)

  const subTotal = cartContent.map((product)=> product.quantity*product.sell_price)
  const totalAmount = subTotal.reduce((accu, curr) => accu + curr, 0)
  console.log(totalAmount)


  return(
    <main className={styles.main}>
      <h2 className={styles["form-heading"]}>Payment Details</h2>
      <form className={styles.form} action={createOrder}>
        
        <label className={styles.label} htmlFor="first_name">First Name *</label>
        <input className={styles.input} type="text" id="first_name" name="first_name" /><br />
        
        <label className={styles.label} htmlFor="last_name">Last Name *</label>
        <input className={styles.input} type="text" id="last_name" name="last_name" /><br />
        
        <label className={styles.label} htmlFor="credit_card">Credit Card Number *</label>
        <input className={styles.input} type="number" id="credit_card" name="credit_card" /><br />

        <label className={styles.label} htmlFor="expiration_date">Expiration Date *</label>
        <input className={styles.input} type="date" id="expiration_date" name="expiration_date" /><br />
        
        <label className={styles.label} htmlFor="security_code">Security Code *</label>
        <input className={styles.input} type="number" id="security_code" name="security_code" /><br />
        
        <input type="hidden" value={totalAmount} name="total_amount" />
        <input type="hidden" value={loginDetails.UserId} name="UserId" />

        <button className={styles.btn} type="submit">Complete Payment</button>
      </form>
    </main>
  )
}