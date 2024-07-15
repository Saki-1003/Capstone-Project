import CreateProductForm from "@/components/form/CreateProductForm"
import AdminSideBar from "@/components/AdminSideBar"
import styles from '../../../page.module.css'

export default function ProductCreatePage() {

  return(
    <main className={styles.flexbox}>
      <section className={styles.flexitem1}>
        <AdminSideBar />
      </section>
      <section className={styles.flexitem2}>
        <CreateProductForm />
      </section>
    </main>
  )
}