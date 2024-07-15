"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";

// GET all products from database
export async function getProducts() {
  const connection = await getDBConnection();
  const [products] = await connection.query('SELECT * FROM products')
  return products
}

// GET a matching product from database
export async function getProduct(productID) {
  console.log(productID)
  const connection = await getDBConnection();
  const [products] = await connection.query('SELECT * FROM products WHERE ProductId = ?', [productID])
  const product = products[0]
  console.log(product)
  return product
}

//CREATE a new product in database
export async function postProduct(product) {
  const connection = await getDBConnection();
  await connection.query(`
    INSERT INTO products (
      product_title, 
      cost, 
      sell_price, 
      attribute1_size, 
      attribute2_color,
      attribute3,
      attribute4,
      category,
      summary,
      specification,
      SupplierId
    ) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?)
  `, Object.values(product))  
  revalidatePath('/')

}

//UPDATE product data in database
export async function updateProduct(product) {
  const connection = await getDBConnection();
  await connection.query(`
    UPDATE products 
    SET
      product_title = ?,
      cost = ?, 
      sell_price = ?, 
      attribute1_size = ?, 
      attribute2_color = ?,
      attribute3 = ?,
      attribute4 = ?,
      category = ?,
      summary = ?,
      specification = ?,
      SupplierId = ?
    WHERE ProductId = ?
  `, Object.values(product))
  revalidatePath('/')
}

// Delete product from database
export async function deleteProduct(productID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM products WHERE ProductId = ?',[productID])
  revalidatePath('/')
}