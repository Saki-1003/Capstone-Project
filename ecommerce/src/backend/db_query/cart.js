"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";


// GET all cart_items from database
export async function getCartItems() {
  const connection = await getDBConnection();
  const [cartItems] = await connection.query('SELECT * FROM cart_items')
  return cartItems
}

// GET all cart_items that belong to the user from database
export async function getCartItemsByUser(UserId) {
  const connection = await getDBConnection();
  const [cartItems] = await connection.query('SELECT * FROM cart_items WHERE UserId = ?', [UserId])
  return cartItems
}

// GET a matching cart_item from database
export async function getCartItem(cart_item) {
  const connection = await getDBConnection();
  const [cartItems] = await connection.query('SELECT * FROM cart_items WHERE ProductId = ? and UserId = ?', Object.values(cart_item))
  const cartItem = cartItems[0]
  return cartItem
}

//CREATE a new cart_item in database
export async function postCartItem(cart_item) {
  const connection = await getDBConnection();
  const cartItem = await getCartItem(cart_item)
  if(!cartItem) {
    await connection.query(`
      INSERT INTO cart_items (
        ProductId,
        UserId
      ) 
      VALUES (?,?)
    `, Object.values(cart_item))  
    revalidatePath('/')
  }
}


// Delete cart_item from database
export async function deleteCartItem(cart_item) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM cart_items WHERE ProductId = ? and UserId = ?', Object.values(cart_item))

}