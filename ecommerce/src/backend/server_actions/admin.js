'use server'

import { postAdmin } from "../db_query/admin"
import { updateAdmin } from "../db_query/admin"

export async function createAdmin (formData) {
  const admin = {
    first_name: formData.get('first_name'), 
    last_name: formData.get('last_name'), 
    email: formData.get('email'),
    password: formData.get('password')
  }
  await postAdmin(admin)
}

export async function editAdmin (formData) {
  const admin = {
    first_name: formData.get('first_name'), 
    last_name: formData.get('last_name'), 
    email: formData.get('email'),
    password: formData.get('password'),
    AdminId: formData.get('AdminId')
  }
 
  await updateAdmin(admin)
}

