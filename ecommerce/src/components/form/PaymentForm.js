"use client"
import { LoginContext } from "@/context/LoginContext"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import { useContext } from 'react'
import styles from './PaymentForm.module.css'
import { createOrder } from "@/backend/server_actions/order"
import { useRouter } from 'next/navigation';
import { updateInventory } from "@/backend/db_query/inventory"
import { getFirstInventoryByProductId } from "@/backend/db_query/inventory"
import { deleteInventory } from "@/backend/db_query/inventory"
import { getInventoriesByProductId } from "@/backend/db_query/inventory"


export default function PaymentForm(){
  const {loginDetails} = useContext(LoginContext)
  const {cartContent, handleChange} = useContext(ShoppingCartContext)
  const router = useRouter()

  const subTotal = cartContent.length && cartContent.map((product)=> product.quantity*product.sell_price)
  const totalAmount = subTotal.length && subTotal.reduce((accu, curr) => accu + curr, 0)
  console.log(totalAmount)

  function handleCartContent() {
    
    //check if there is enough inventories to cover each quantity in the cart
    async function handleInventory(){
      const outOfStockItems = []
      for (const cartItem of cartContent) {
        const item = {...cartItem}
        const inventories = await getInventoriesByProductId(item.ProductId)
        console.log(inventories)
        const totalQuantity = inventories.map((inventory)=>inventory.quantity).reduce((accu, curr)=>accu + curr, 0)
        console.log(totalQuantity)
        if(totalQuantity < item.quantity) {
          outOfStockItems.push(item.product_title)
        }
      }
      if(outOfStockItems.length) {
        alert(`Sorry, these items are out of stock: ${outOfStockItems.join(', ')}`)
        return
      }  
      //deduct the quantity from inventory only when there are enough stock to cover the order and clear the cart context, redirect to thank you page
      for (const cartItem of cartContent) {
        const item = {...cartItem}
        while (item.quantity > 0) {
          let currentInventory = await getFirstInventoryByProductId(item.ProductId)
          console.log(currentInventory)
          let newQuantity = Number(currentInventory.quantity) - Number(item.quantity)
          console.log(newQuantity)
          if (newQuantity < 1) {
            await deleteInventory(currentInventory.InventoryId)
          } else {
            const newInventory = await updateInventory(newQuantity, item.ProductId)
          }
          item.quantity -= currentInventory.quantity
        }
 
        handleChange("")
        router.push('/thankyou')
      }
    }
  handleInventory()
  }
    


  return(
    <main className={styles.main}>
      <h2 className={styles["form-heading"]}>Payment Details</h2>
      <form className={styles.form} action={createOrder}>
        
        <label className={styles.label} htmlFor="first_name">First Name *</label>
        <input className={styles.input} type="text" id="first_name" name="first_name" required /><br />
        
        <label className={styles.label} htmlFor="last_name">Last Name *</label>
        <input className={styles.input} type="text" id="last_name" name="last_name" required /><br />
        
        <label className={styles.label} htmlFor="credit_card">Credit Card Number *</label>
        <input className={styles.input} type="number" id="credit_card" name="credit_card" required /><br />

        <label className={styles.label} htmlFor="expiration_date">Expiration Date *</label>
        <input className={styles.input} type="date" id="expiration_date" name="expiration_date" required /><br />
        
        <label className={styles.label} htmlFor="security_code">Security Code *</label>
        <input className={styles.input} type="number" id="security_code" name="security_code" required /><br />
        
        <input type="hidden" value={totalAmount} name="total_amount" />
        <input type="hidden" value={loginDetails.UserId} name="UserId" />

        <button className={styles.btn} onClick={handleCartContent} type="submit">Complete Payment</button>
      </form>
    </main>
  )
}