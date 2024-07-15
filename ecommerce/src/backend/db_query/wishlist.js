"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";

// GET all wishlist_items from database
export async function getWishlistItems() {
  const connection = await getDBConnection();
  const [wishlists] = await connection.query('SELECT * FROM wishlist_items')
  return wishlists
}

// GET a matching wishlist_item from database
export async function getWishlistItem(wishlist_item) {
  const connection = await getDBConnection();
  const [wishlists] = await connection.query('SELECT * FROM wishlist_items WHERE UserId = ? and ProductId = ?', Object.values(wishlist_item))
  const wishlist = wishlists[0]
  return wishlist
}

//CREATE a new wishlist in database
export async function postWishlistItem(wishlist_item) {
  const connection = await getDBConnection();
  const wishlist = await getWishlistItem(wishlist_item)
  if(!wishlist) {
    await connection.query(`
      INSERT INTO wishlist_items (
        ProductId,
        UserId
      ) 
      VALUES (?,?)
    `, Object.values(wishlist_item))  
    revalidatePath('/')
  }
}


// Delete wishlist from database
export async function deleteWishlistItem(wishlist_item) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM wishlist_items WHERE ProductId = ? and UserId = ?',Object.values(wishlist_item))
  revalidatePath('/')
}