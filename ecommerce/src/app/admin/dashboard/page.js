import AdminRegForm from "@/components/form/AdminRegForm"
import AdminUpdateForm from "@/components/form/AdminUpdateForm"
import AdminSideBar from "@/components/AdminSideBar"
import InventoryTabele from "@/components/InventoryTable"
import styles from '../../page.module.css'


export default function AdminHomePage() {
 
  return (
    <>
    <main className={styles.flexbox}>
      <section className={styles.flexitem1}>
        <AdminSideBar />
      </section>
      <section className={styles.flexitem2}>
        <h2 className={styles.welcome}>Admin dashboard</h2>
        <InventoryTabele />
        <AdminRegForm />
        <AdminUpdateForm />
      </section>
    </main>
      </>
  );
}