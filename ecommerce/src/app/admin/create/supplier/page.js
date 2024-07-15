import CreateSupplierForm from "@/components/form/CreateSupplierForm"
import AdminSideBar from "@/components/AdminSideBar"
import styles from '../../../page.module.css'

export default async function SupplierCreatePage() {
  
  
  return(
    <main className={styles.flexbox}>
      <section className={styles.flexitem1}>
        <AdminSideBar />
      </section>
      <section className={styles.flexitem2}>   
        <CreateSupplierForm />
      </section>
    </main>
  )
}