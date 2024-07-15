"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";


// GET all order_items from database
export async function getOrderItems() {
  const connection = await getDBConnection();
  const [orderItems] = await connection.query('SELECT * FROM order_items')
  return orderItems
}

// GET all order_items by OrderId
export async function getOrderItemsByUser(orderID) {
  const connection = await getDBConnection();
  const [orderItems] = await connection.query('SELECT * FROM order_items WHERE OrderId = ?', [orderID])
  return orderItems
}

// GET matching order_items by ProductId and OrderId
export async function getOrderItem(order_item) {
  const connection = await getDBConnection();
  const [orderItems] = await connection.query('SELECT * FROM order_items WHERE OrderId = ? and ProductId = ?', Object.values(order_item))
  const orderItem = orderItems[0]
  return orderItem
}

//CREATE a new cart_item in database
export async function postOrderItem(order_item) {
  const connection = await getDBConnection();
  const orderItem = await getOrderItem(order_item)
  if(!orderItem) {
    await connection.query(`
      INSERT INTO order_items (
        OrderId,
        ProductId
      ) 
      VALUES (?,?)
    `, Object.values(order_item))  
    revalidatePath('/')
  }
}

// Delete cart_item from database
export async function deleteOrderItem(orderID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM order_items WHERE OrderId = ?', [orderID])

}