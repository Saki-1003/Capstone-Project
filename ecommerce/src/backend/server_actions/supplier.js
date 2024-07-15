'use server'
import { postSupplier } from "../db_query/supplier"
import { updateSupplier } from "../db_query/supplier"

export async function createSupplier (formData) {
  const supplier = {
    supplier_name: formData.get("supplier_name"), 
    supplier_address1: formData.get("supplier_address1"), 
    supplier_address2: formData.get("supplier_address2"), 
    city: formData.get("city"),
    postal_code: formData.get("postal_code"),
    region: formData.get("region"),
    country: formData.get("country"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    supplier_category: formData.get("supplier_category")
  }
  await postSupplier(supplier)
}

export async function editSupplier (formData) {

  const supplier = {
    supplier_name: formData.get('supplier_name'), 
    supplier_address1: formData.get('supplier_address1'), 
    supplier_address2: formData.get('supplier_address2'), 
    city: formData.get('city'),
    postal_code: formData.get('postal_code'),
    region: formData.get('region'),
    country: formData.get('country'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    supplier_category: formData.get('supplier_category'),
    SupplierId: formData.get('SupplierID')
  }
 
  await updateSupplier(supplier)
}