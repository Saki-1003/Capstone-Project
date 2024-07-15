import EditProductForm from "@/components/form/EditProductForm"
import AdminSideBar from "@/components/AdminSideBar"
import styles from '../../../page.module.css'

export default function ProductUpdatePage() {
  
  return(
    <main className={styles.flexbox}>
      <section className={styles.flexitem1}>
        <AdminSideBar />
      </section>
      <section className={styles.flexitem2}>   
        <EditProductForm />    
      </section>
    </main>
  )
}