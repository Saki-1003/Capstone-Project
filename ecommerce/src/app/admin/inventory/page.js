import GoodsReceiptForm from "@/components/form/GoodsReceiptForm"
import AdminSideBar from "@/components/AdminSideBar"
import styles from '../../page.module.css'

export default function PostGoodsReceiptPage() {

  return(
    <main className={styles.flexbox}>
      <section className={styles.flexitem1}>
        <AdminSideBar />
      </section>
      <section className={styles.flexitem2}>   
        <GoodsReceiptForm />
      </section>
    </main>

    
  )
}