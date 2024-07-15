"use server";

import { revalidatePath } from "next/cache";
import getDBConnection from "../../../database/connection";


// GET all users from database
export async function getUsers() {
  const connection = await getDBConnection();
  const [users] = await connection.query('SELECT * FROM users')
  return users
}

// GET a matching user from database
export async function getUser(userID) {
  const connection = await getDBConnection();
  const [users] = await connection.query('SELECT * FROM users WHERE UserId = ?', [userID])
  const user = users[0]
  return user
}

//CREATE a new user in database
export async function postUser(user) {
  const connection = await getDBConnection();
  await connection.query(`
    INSERT INTO users (
      first_name, 
      last_name, 
      email,
      phone,
      password,
      birthday,
      address_line1, 
      address_line2,  
      city,
      postal_code,
      region,
      country
    ) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
  `, Object.values(user))  
  revalidatePath('/')
}

//UPDATE user data in database
export async function updateUser(user) {
  const connection = await getDBConnection();
  await connection.query(`
    UPDATE users 
    SET
      first_name = ?, 
      last_name = ?, 
      email = ?,
      phone = ?,
      password = ?,
      birthday = ?,
      address_line1 = ?, 
      address_line2 = ?,  
      city = ?,
      postal_code = ?,
      region = ?,
      country = ?
    WHERE SupplierId = ?
  `, Object.values(user))
  revalidatePath('/')
}

// Delete user from database
export async function deleteUser(userID) {
  const connection = await getDBConnection();
  await connection.query('DELETE FROM users WHERE UserId = ?',[userID])
  revalidatePath('/')
}