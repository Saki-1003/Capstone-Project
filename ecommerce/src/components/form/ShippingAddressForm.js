"use client"

import { getUsers } from "@/backend/db_query/user"
import { LoginContext } from "@/context/LoginContext"
import { useState, useContext} from 'react'
import styles from './ShippingAddressForm.module.css'
import Link from "next/link"
import { useRouter } from "next/navigation"


export default function ShippingAddressForm(){
  const router = useRouter()

  const [ user, setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
    address_line1:"",
    address_line2:"",
    city:"",
    postal_code:"",
    region:"",
    country:""
  })
  const {loginDetails} = useContext(LoginContext)

  async function handleAutofill() {
    const users = await getUsers()
    const matchingUser = users.find((user)=>user.UserId===loginDetails.UserId)
    setUser(matchingUser)
  }

  function handleAddressChange(e) {
    e.preventDefault()
    setUser({ ...user,
      first_name: e.target.value.first_name,
      last_name: e.target.value.last_name,
      email: e.target.value.email,
      phone: e.target.value.phone,
      address_line1: e.target.value.address_line1,
      address_line2: e.target.value.address_line2,
      city: e.target.value.city,
      postal_code: e.target.value.postal_code,
      region: e.target.value.region,
      country: e.target.value.country
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.push('/payment')
  }

  return(
    <main className={styles.main}>
      <h2 className={styles["form-heading"]}>Shipping Address</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.btns} type="button" onClick={handleAutofill}>Autofill</button>
        
        <label className={styles.label} htmlFor="first_name">First Name *</label>
        <input className={styles.input} value={user.first_name} onChange={handleAddressChange} type="text" id="first_name" name="first_name" required /><br />
        
        <label className={styles.label} htmlFor="last_name">Last Name *</label>
        <input className={styles.input} value={user.last_name} onChange={handleAddressChange} type="text" id="last_name" name="last_name" required /><br />
        
        <label className={styles.label} htmlFor="email">Email *</label>
        <input className={styles.input} value={user.email} onChange={handleAddressChange} type="email" id="email" name="email" required /><br />

        <label className={styles.label} htmlFor="phone">Phone *</label>
        <input className={styles.input} value={user.phone} onChange={handleAddressChange} type="number" id="phone" name="phone" required /><br />

        <label className={styles.label} htmlFor="address_line1">Address_Line1 *</label>
        <input className={styles.input} value={user.address_line1}  onChange={handleAddressChange} type="text" id="address_line1" name="address_line1" required /><br />
        
        <label className={styles.label} htmlFor="address_line2">Address_Line2</label>
        <input className={styles.input} value={user.address_line2} onChange={handleAddressChange} type="text" id="address_line2" name="address_line2" /><br />

        <label className={styles.label} htmlFor="city">City *</label>
        <input className={styles.input} value={user.city} onChange={handleAddressChange} type="text" id="city" name="city" required /><br />
      
        <label className={styles.label} htmlFor="postal_code">Postal Code *</label>
        <input className={styles.input} value={user.postal_code} onChange={handleAddressChange} type="number" id="postal_code" name="postal_code" required /><br />
        
        <label className={styles.label} htmlFor="region">Region</label>
        <input className={styles.input} value={user.region} onChange={handleAddressChange} type="text" id="region" name="region" /><br />
        
        <label className={styles.label} htmlFor="country">Country *</label>
        <input className={styles.input} value={user.country} onChange={handleAddressChange} type="text" id="country" name="country" required /><br />
        
        <button className={styles.btn} type="submit">NEXT</button>
      </form>
    </main>
  )
}