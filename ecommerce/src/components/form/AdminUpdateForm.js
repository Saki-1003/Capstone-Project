"use client" 

import { getAdmin } from "@/backend/db_query/admin"
import { editAdmin } from "@/backend/server_actions/admin"
import { deleteAdmin } from "@/backend/db_query/admin"
import { useState } from 'react'
import styles from './AdminUpdateForm.module.css'


export default function AdminUpdateForm() {
  const [ adminId, setAdminId ] = useState()
  const [ input, setInput ] = useState({
    first_name:"", 
    last_name:"", 
    email:"",
    password:""
  })

  //Fetch admin data from database by admin ID
  async function handleAdmin() {
    const admin = await getAdmin(adminId)
    setInput(admin)
  }

  //Override admin data with new input data
  function handleInputUpdate(e) {
    e.preventDefault()
    setInput({ ...input, [e.target.name]: e.target.value})
  }

  //Delete admin from database by admin ID
  function handleDelete() {
    deleteAdmin(adminId)
  }

  return(
    <section className={styles.section}>
      <h3 className={styles["form-heading"]}>Update/ Delete Admin</h3>
      <form action={editAdmin}>

        <label className={styles.labelForID} htmlFor="AdminId">Admin ID </label>
        <input className={styles.inputID} value={adminId} onChange={(e)=>setAdminId(e.target.valueAsNumber)} type="number" id="AdminId" name="AdminId" />
        <button className={styles.btns} type="button" onClick={handleAdmin}>Edit</button>
        <button className={styles.btns} onClick={handleDelete} type="button">Delete</button><br />

        <label className={styles.label} htmlFor="admin_first_name">First Name *</label>
        <input className={styles.input} value={input.first_name} onChange={handleInputUpdate} type="text" id="admin_first_name" name="first_name" /><br />
        
        <label className={styles.label} htmlFor="admin_last_name">Last Name* </label>
        <input className={styles.input} value={input.last_name} onChange={handleInputUpdate} type="text" id="admin_last_name" name="last_name" /><br />
        
        <label className={styles.label} htmlFor="email">Email *</label>
        <input className={styles.input} value={input.email} onChange={handleInputUpdate} type="email" id="email" name="email" /><br />

        <label className={styles.label} htmlFor="password">Password *</label>
        <input className={styles.input} value={input.password} onChange={handleInputUpdate} type="password" id="password" name="password" /><br />
        
        <input type="hidden" value={adminId} name="AdminId" />

        <button className={styles.btn} type="submit">Update</button>
      </form>
     </section>
  )
}