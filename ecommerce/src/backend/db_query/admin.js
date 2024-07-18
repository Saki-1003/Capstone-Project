"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";

// GET all admins from database
export async function getAdmins() {
  const connection = await getDBConnection();
  const [admins] = await connection.query('SELECT * FROM admins')
  return admins
}

// GET a matching admin from database
export async function getAdmin(adminID) {
  const connection = await getDBConnection();
  const [admins] = await connection.query('SELECT * FROM admins WHERE AdminId = ?', [adminID])
  const admin = admins[0]
  return admin
}

//CREATE a new admin in database
export async function postAdmin(admin) {
  const connection = await getDBConnection();
  await connection.query(`
    INSERT INTO admins (
      first_name, 
      last_name, 
      email,
      password
    ) 
    VALUES (?,?,?,?)
  `, Object.values(admin))  
  revalidatePath('/')
}

//UPDATE admin data in database
export async function updateAdmin(admin) {
  const connection = await getDBConnection();
  await connection.query(`
    UPDATE admins 
    SET
      first_name = ?, 
      last_name = ?, 
      email = ?,
      password = ?
    WHERE AdminId = ?
  `, Object.values(admin))
  revalidatePath('/')
}

// Delete admin from database
export async function deleteAdmin(adminID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM admins WHERE AdminId = ?',[adminID])
  revalidatePath('/')
}