import { createAdmin } from "@/backend/server_actions/admin"
import styles from './AdminRegForm.module.css'

export default function AdminRegForm() {

  return(
    <section className={styles.section}>
      <h3 className={styles["form-heading"]}>Create Admin</h3>
      <form action={createAdmin}>

        <label className={styles.label} htmlFor="admin_first_name">First Name *</label>
        <input className={styles.input} type="text" id="admin_first_name" name="first_name" /><br />
        
        <label className={styles.label} htmlFor="admin_last_name">Last Name *</label>
        <input className={styles.input} type="text" id="admin_last_name" name="last_name" /><br />
        
        <label className={styles.label} htmlFor="email">Email *</label>
        <input className={styles.input} type="email" id="email" name="email" /><br />

        <label className={styles.label} htmlFor="password">Password *</label>
        <input className={styles.input} type="password" id="password" name="password" /><br />

        <button className={styles.btn} type="submit">Register</button>
      </form>
    </section>
  )
}