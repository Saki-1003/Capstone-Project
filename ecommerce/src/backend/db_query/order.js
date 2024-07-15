"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";


// GET all orders from database
export async function getOrders() {
  const connection = await getDBConnection();
  const [orders] = await connection.query('SELECT * FROM orders')
  return orders
}

// GET all the orders that belong to the user
export async function getOrdersByUser(UserId) {
  const connection = await getDBConnection();
  const [orders] = await connection.query('SELECT * FROM orders WHERE UserId = ?', [UserId])
  return orders
}

//CREATE a new order in database
export async function postOrder(order) {
  const connection = await getDBConnection();
  const [data] = await connection.query(`
      INSERT INTO orders (
        total_amount,
        UserId
      ) 
      VALUES (?,?)
    `, Object.values(order)) 
    console.log(data) 

  return data.insertId
}

// Delete order from database
export async function deleteOrderByOrderId(orderID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM orders WHERE OrderId = ?',[orderID])
}

// Delete orders that belong to the user 
export async function deleteOrderByUserId(userID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM orders WHERE UserId = ?',[userID])
}

