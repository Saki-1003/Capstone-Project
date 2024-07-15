'use server'

import { postUser } from "../db_query/user"
import { updateUser } from "../db_query/user"

export async function createUser (formData) {
  const user = {
    first_name: formData.get('first_name'), 
    last_name: formData.get('last_name'), 
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    birthday: formData.get('birthday'),
    address_line1: formData.get('address_line1'), 
    address_line2: formData.get('address_line2'),  
    city: formData.get('city'),
    postal_code: formData.get('postal_code'),
    region: formData.get('region'),
    country: formData.get('country')
  }
  await postUser(user)
}

export async function editUser (formData) {
  const user = {
    first_name: formData.get('first_name'), 
    last_name: formData.get('last_name'), 
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    birthday: formData.get('birthday'),
    address_line1: formData.get('address_line1'), 
    address_line2: formData.get('address_line2'),  
    city: formData.get('city'),
    postal_code: formData.get('postal_code'),
    region: formData.get('region'),
    country: formData.get('country'),
    UserId: formData.get('UserID')
  }
 
  await updateUser(user)
}

