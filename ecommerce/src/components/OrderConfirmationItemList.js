import { useContext } from "react"
import { ShoppingCartContext } from "@/context/ShoppingCartContext"

export default function OrderConfirmationListItem({product}) {
  const {cartContent} = useContext(ShoppingCartContext)
  console.log(cartContent)
  const itemsInCart = Object.keys(cartContent).length && cartContent.map((product)=><OrderConfirmationListItem product={product} />)

  
  return (
    <div>
      {/* <h2>Order Confirmation</h2>
      {Object.keys(cartContent).length && cartContent.map((product)=>{
        <h3>{product.product_title}</h3>
        
      }}
      <p>Total:</p>
      <p>NZD {product.sell_price}</p>
      <p>Quantity: </p> */}
  </div>
  )
}