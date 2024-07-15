"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";

// GET all invemtory from database
export async function getInventories() {
  const connection = await getDBConnection();
  const [inventories] = await connection.query('SELECT * FROM inventories')
  return inventories
}

// GET matching inventories from database
// export async function getInventory(ProductId) {
//   const connection = await getDBConnection();
//   const [inventories] = await connection.query('SELECT ProductId FROM inventories WHERE ProductId = ?', [ProductId])
//   return inventories
// }

//CREATE a new inventory in database
export async function postInventory(inventory) {
  const connection = await getDBConnection();
  await connection.query(`
    INSERT INTO inventories (
      GR_date, 
      quantity, 
      location,
      ProductId
    ) 
    VALUES (?,?,?,?)
  `, Object.values(inventory))  
  revalidatePath('/')
}

//UPDATE quantity of matching product in inventories
export async function updateProduct(quantity, ProductId) {
  const connection = await getDBConnection();
  await connection.query(`
    UPDATE inventories 
    SET
     quantity = ?
    WHERE ProductId = ?
    LIMIT 1
  `, [quantity, ProductId])
  revalidatePath('/')
}

// Delete inventory from database
export async function deleteInventory(inventoryID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM inventories WHERE InventoryId = ?',[inventoryID])
  revalidatePath('/')
}