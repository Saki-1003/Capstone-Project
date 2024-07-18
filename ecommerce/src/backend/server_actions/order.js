'use server'

import { postOrder } from "../db_query/order"
import { createOrderItem } from "./order_item"
import { getCartItemsByUser } from "../db_query/cart"
import { deleteCartItemsByUserId } from "@/backend/db_query/cart"

export async function createOrder (data) {
  const order = {
    total_amount: data.get("total_amount"),
    UserId: data.get("UserId")
  }
  const orderID = await postOrder(order)
  
  // create order item and delete cart items at the same time when order is created
  const cartItems = await getCartItemsByUser(data.get("UserId"))
  const productIDs = cartItems.map((item)=>item.ProductId)
  productIDs.forEach(async (ID) => {
    await createOrderItem({OrderId: orderID, ProductId: ID})
  })
  await deleteCartItemsByUserId(data.get("UserId"))
}


