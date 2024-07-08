'use server'
import { postProduct } from "./product"

export async function createProduct (formData) {
  const product = {
    product_code: formData.get('code'), 
    product_title: formData.get('title'), 
    cost: formData.get('cost'), 
    sell_price: formData.get('price'), 
    quantity: formData.get('quantity'), 
    attribute1_size: formData.get('size'), 
    attribute2_color: formData.get('color'),
    attribute3: formData.get('attribute3'),
    attribute4: formData.get('attribute4'),
    category: formData.get('category'),
    summary: formData.get('summary'),
    specification: formData.get('specification')
  }
  await postProduct(product)
}