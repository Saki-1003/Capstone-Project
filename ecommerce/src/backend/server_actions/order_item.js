'use server'

import { postOrderItem } from "../db_query/order_item"

export async function createOrderItem (data) {
  const orderItem = {
    OrderId: data.OrderId,
    ProductId: data.ProductId
  }
  await postOrderItem(orderItem)
}
