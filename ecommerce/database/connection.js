"use server";

import mysql from 'mysql2/promise'

let cachedConnection = null;

export default async function getDBConnection() {
  if (cachedConnection) return cachedConnection

  cachedConnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  })

  return cachedConnection
}
