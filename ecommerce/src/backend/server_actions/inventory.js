'use server'
import { postInventory } from "../db_query/inventory"


export async function createInventory (formData) {
  const inventory = {
    GR_date: formData.get('GR_date'), 
    quantity: formData.get('quantity'), 
    location: formData.get('location'), 
    ProductId: formData.get('ProductId'), 
  }
  await postInventory(inventory)
}