import { createSupplier } from "@/backend/server_actions/supplier"
import styles from './CreateSupplierForm.module.css'

export default async function CreateSupplierForm() {


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
        <h1 className={styles["form-heading"]}>Create new supplier</h1>
      </div>
      <form action={createSupplier}>
        <label className={styles.label} htmlFor="supplier_name">Supplier Name *</label>
        <input className={styles.input} type="text" id="supplier_name" name="supplier_name" /><br />
        
        <label className={styles.label} htmlFor="supplier_address1">Address_Line1 *</label>
        <input className={styles.input} type="text" id="supplier_address1" name="supplier_address1" /><br />
      
        <label className={styles.label} htmlFor="supplier_address2">Address_Line2:</label>
        <input className={styles.input} type="text" id="supplier_address2" name="supplier_address2" /><br />

        <label className={styles.label} htmlFor="city">City *</label>
        <input className={styles.input} type="text" id="city" name="city" /><br />
      
        <label className={styles.label} htmlFor="postal_code">Postal Code *</label>
        <input className={styles.input} type="number" id="postal_code" name="postal_code" /><br />
        
        <label className={styles.label} htmlFor="region">Region</label>
        <input className={styles.input} type="text" id="region" name="region" /><br />
        
        <label className={styles.label} htmlFor="country">Country *</label>
        <input className={styles.input} type="text" id="country" name="country" /><br />
    
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} type="email" id="email" name="email" /><br />

        <label className={styles.label} htmlFor="phone">Phone</label>
        <input className={styles.input} type="number" id="phone" name="phone" /><br />

        <label className={styles.label} htmlFor="supplier_category">Category *</label>
        <input className={styles.input} type="text" id="supplier_category" name="supplier_category" /><br />
        
        <button className={styles.btn} type="submit">Create</button>
      </form>
    </main>
  )
}