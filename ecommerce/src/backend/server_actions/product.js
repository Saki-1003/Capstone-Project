'use server'
import { postProduct } from "../db_query/product"
import { updateProduct } from "../db_query/product"

export async function createProduct (formData) {
  console.log('product create')
  const product = {
    product_title: formData.get('title'), 
    cost: formData.get('cost'), 
    sell_price: formData.get('price'), 
    attribute1_size: formData.get('size'), 
    attribute2_color: formData.get('color'),
    attribute3: formData.get('attribute3'),
    attribute4: formData.get('attribute4'),
    category: formData.get('category'),
    summary: formData.get('summary'),
    specification: formData.get('specification'),
    SupplierId: formData.get('SupplierId')
  }
  await postProduct(product)
}

export async function editProduct (formData) {

  const product = {
    product_title: formData.get('product_title'), 
    cost: formData.get('cost'), 
    sell_price: formData.get('sell_price'),  
    attribute1_size: formData.get('attribute1_size'), 
    attribute2_color: formData.get('attribute2_color'),
    attribute3: formData.get('attribute3'),
    attribute4: formData.get('attribute4'),
    category: formData.get('category'),
    summary: formData.get('summary'),
    specification: formData.get('specification'),
    SupplierId: formData.get('SupplierId'),
    ProductId: formData.get('ProductID')
  }
  console.log(product)
  await updateProduct(product)
}