import { getUsers } from "@/backend/db_query/user"
import { LoginContext } from "@/context/LoginContext"
import { useState, useContext} from 'react'
import styles from './ShippingAddressForm.module.css'


export default function ShippingAddressForm(){
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

  return(
    <main className={styles.main}>
      <h2 className={styles["form-heading"]}>Shipping Address</h2>
      <form className={styles.form}>
        <button className={styles.btns} type="button" onClick={handleAutofill}>Autofill</button>
        
        <label className={styles.label} htmlFor="first_name">First Name *</label>
        <input className={styles.input} value={user.first_name} type="text" id="first_name" name="first_name" /><br />
        
        <label className={styles.label} htmlFor="last_name">Last Name *</label>
        <input className={styles.input} value={user.last_name} type="text" id="last_name" name="last_name" /><br />
        
        <label className={styles.label} htmlFor="email">Email *</label>
        <input className={styles.input} value={user.email} type="email" id="email" name="email" /><br />

        <label className={styles.label} htmlFor="phone">Phone *</label>
        <input className={styles.input} value={user.phone} type="number" id="phone" name="phone" /><br />

        <label className={styles.label} htmlFor="address_line1">Address_Line1 *</label>
        <input className={styles.input} value={user.address_line1} type="text" id="address_line1" name="address_line1" /><br />
        
        <label className={styles.label} htmlFor="address_line2">Address_Line2</label>
        <input className={styles.input} value={user.address_line2} type="text" id="address_line2" name="address_line2" /><br />

        <label className={styles.label} htmlFor="city">City *</label>
        <input className={styles.input} value={user.city} type="text" id="city" name="city" /><br />
      
        <label className={styles.label} htmlFor="postal_code">Postal Code *</label>
        <input className={styles.input} value={user.postal_code} type="number" id="postal_code" name="postal_code" /><br />
        
        <label className={styles.label} htmlFor="region">Region</label>
        <input className={styles.input} value={user.region} type="text" id="region" name="region" /><br />
        
        <label className={styles.label} htmlFor="country">Country *</label>
        <input className={styles.input} value={user.country} type="text" id="country" name="country" /><br />
        
        <button className={styles.btn} type="button">NEXT</button>
      </form>
    </main>
  )
}