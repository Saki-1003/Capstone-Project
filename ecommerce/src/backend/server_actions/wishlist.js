'use server'

import { postWishlistItem } from "../db_query/wishlist"


export async function createWishlistItem (data) {
  if(!data.UserId) {
    return
  }
  const wishlist = {
    ProductId: data.ProductId,
    UserId: data.UserId
  }
  await postWishlistItem(wishlist)
}





