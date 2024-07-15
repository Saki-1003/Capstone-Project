import EditSupplierForm from "@/components/form/EditSupplierForm"
import AdminSideBar from "@/components/AdminSideBar"
import styles from '../../../page.module.css'


export default function UpdateSupplierPage() {

  return(
    <main className={styles.flexbox}>
      <section className={styles.flexitem1}>
        <AdminSideBar />
      </section>
      <section className={styles.flexitem2}>   
      <EditSupplierForm />
      </section>
    </main>
  )
}