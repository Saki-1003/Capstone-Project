'use client'
import { useState } from 'react'
import { getSupplier } from '@/backend/db_query/supplier'
import { editSupplier } from '@/backend/server_actions/supplier'
import { deleteSupplier } from '@/backend/db_query/supplier'
import styles from './EditSupplierForm.module.css'

export default function EditSupplierForm() {

  const [supplierID, setSupplierID] = useState()
  const [ inputValue, setInputValue ] = useState({
    supplier_name: "", 
    supplier_address1: "", 
    supplier_address2: "", 
    city: "",
    postal_code: "",
    region: "",
    country: "",
    email: "",
    phone: "",
    supplier_category: ""
  })
  
  
  async function handleSupplierID() {
    const supplier = await getSupplier(supplierID)
    setInputValue(supplier)
  }

  function handleUpdateInput(e){
    e.preventDefault()
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  function handleDelete() {
    deleteSupplier(supplierID)
  }

  

  return(
    <main className={styles.main}>
        <div className={styles.headingcontainer}>
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 48 48">
          <path fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455a10.108 10.108 0 0 1 0 20.217c-5.388 0-16.96-1.92-20.079-7.759"/>
          <path fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round" d="M30.012 18.455H10.729a6.23 6.23 0 1 0 3.874 11.072l.017.021Z"/>
          <path fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round" d="m13.971 34.794l-8.264 2.859l4.226-6.74m13.801-7.873c-1.921 3.472-1.738 11.395 3.997 15.538M17.383 27.557c-.74 1.52.053 6.2 2.313 9.595"/>
          <circle cx="31.962" cy="25.732" r="2.79" fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="41.448" cy="15.309" r="2.052" fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="34.985" cy="11.38" r="2.052" fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round"/>
          <path fill="none" stroke="#FF9A62" strokeLinecap="round" strokeLinejoin="round" d="M33.26 18.99c.985-1.223 3.242-3.457 6.112-3.79m-8.795 3.271a8.93 8.93 0 0 1 2.733-5.932"/>
        </svg>
        <h1 className={styles["form-heading"]}>Update/Delete Supplier</h1>
      </div>
      <form action={editSupplier}>

        <label className={styles.labelForID} htmlFor="SupplierId">Supplier ID:</label>
        <input className={styles.inputID} value={supplierID} onChange={(e)=>setSupplierID(e.target.valueAsNumber)} type="number" id="SupplierId" name="SupplierId" />
        <button className={styles.btns} type="button" onClick={handleSupplierID}>Edit</button>
        <button className={styles.btns} type="button" onClick={handleDelete}>Delete</button><br />


        <label className={styles.label} htmlFor="supplier_name">Supplier Name *</label>
        <input className={styles.input} value={inputValue.supplier_name} onChange={handleUpdateInput} type="text" id="supplier_name" name="supplier_name" /><br />
        
        <label className={styles.label} htmlFor="supplier_address1">Address_Line1 *</label>
        <input className={styles.input} value={inputValue.supplier_address1} onChange={handleUpdateInput} type="text" id="supplier_address1" name="supplier_address1" /><br />
      
        <label className={styles.label} htmlFor="supplier_address2">Address_Line2</label>
        <input className={styles.input} value={inputValue.supplier_address2} onChange={handleUpdateInput} type="text" id="supplier_address2" name="supplier_address2" /><br />

        <label className={styles.label} htmlFor="city">City *</label>
        <input className={styles.input} value={inputValue.city} onChange={handleUpdateInput} type="text" id="city" name="city" /><br />
      
        <label className={styles.label} htmlFor="postal_code">Postal Code *</label>
        <input className={styles.input} value={inputValue.postal_code} onChange={handleUpdateInput} type="number" id="postal_code" name="postal_code" /><br />
        
        <label className={styles.label} htmlFor="region">Region</label>
        <input className={styles.input} value={inputValue.region} onChange={handleUpdateInput} type="text" id="region" name="region" /><br />
        
        <label className={styles.label} htmlFor="country">Country *</label>
        <input className={styles.input} value={inputValue.country} onChange={handleUpdateInput} type="text" id="country" name="country" /><br />
    
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} value={inputValue.email} onChange={handleUpdateInput} type="email" id="email" name="email" /><br />

        <label className={styles.label} htmlFor="phone">Phone</label>
        <input className={styles.input} value={inputValue.phone} onChange={handleUpdateInput} type="number" id="phone" name="phone" /><br />

        <label className={styles.label} htmlFor="supplier_category">Category *</label>
        <input className={styles.input} value={inputValue.supplier_category} onChange={handleUpdateInput} type="text" id="supplier_category" name="supplier_category" /><br />

        <input className={styles.input} type="hidden" value={supplierID} name="SupplierID"></input>
        <button className={styles.btn} type="submit">Update</button>
      </form>
     </main>
  )
}