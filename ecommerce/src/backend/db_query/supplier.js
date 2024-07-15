"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";

// GET all suppliers from database
export async function getSuppliers() {
  const connection = await getDBConnection();
  const [suppliers] = await connection.query('SELECT * FROM suppliers')
  return suppliers
}

// GET a matching supplier from database
export async function getSupplier(supplierID) {
  const connection = await getDBConnection();
  const [suppliers] = await connection.query('SELECT * FROM suppliers WHERE SupplierId = ?', [supplierID])
  const supplier = suppliers[0]
  console.log(supplier)
  return supplier
}

//CREATE a new supplier in database
export async function postSupplier(supplier) {
  const connection = await getDBConnection();
  await connection.query(`
    INSERT INTO suppliers (
      supplier_name, 
      supplier_address1, 
      supplier_address2, 
      city,
      postal_code,
      region,
      country,
      email,
      phone,
      supplier_category
    ) 
    VALUES (?,?,?,?,?,?,?,?,?,?)
  `, Object.values(supplier))  
  revalidatePath('/')
}

//UPDATE supplier data in database
export async function updateSupplier(supplier) {
  const connection = await getDBConnection();
  await connection.query(`
    UPDATE suppliers 
    SET
      supplier_name = ?, 
      supplier_address1 = ?, 
      supplier_address2 = ?, 
      city = ?,
      postal_code = ?,
      region = ?,
      country = ?,
      email = ?,
      phone = ?,
      supplier_category = ?
    WHERE SupplierId = ?
  `, Object.values(supplier))
  revalidatePath('/')
}

// Delete supplier from database
export async function deleteSupplier(supplierID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM suppliers WHERE SupplierId = ?',[supplierID])
  revalidatePath('/')
}