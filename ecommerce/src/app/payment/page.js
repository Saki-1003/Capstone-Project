"use client"
import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"
import OrderConfirmationListItem from "@/components/OrderConfirmationItemList"

export default function CheckoutPage() {
  const {cartContent} = useContext(ShoppingCartContext)
  const itemsInCart = cartContent.map((product)=><OrderConfirmationListItem product={product} />)

  

  return(
    <main style={{display:"flex", gap: "20rem"}}>
      <section>
        <h2>Order Confirmation</h2>
        {itemsInCart}
        <p>Total:</p>
      </section>

      <section>
       
        
      </section>
   
  </main>
  )
}