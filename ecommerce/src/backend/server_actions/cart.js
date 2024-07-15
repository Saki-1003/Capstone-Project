'use server'

import { postCartItem } from "../db_query/cart"

export async function createCartItem (data) {
  const cart = {
    ProductId: data.ProductId,
    UserId: data.UserId
  }
  await postCartItem(cart)
}
