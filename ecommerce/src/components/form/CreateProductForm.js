// import styles from './page.module.css'
// import ImagePicker from '@/Component/imagePicker'
import { createProduct } from "@/backend/server_actions/product"
import styles from './CreateProductForm.module.css'

export default async function CreateProductForm() {

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
        <h1 className={styles["form-heading"]}>Create new product</h1>
      </div>
      <form action={createProduct}>

        <label className={styles.label} htmlFor="title">Product Title *</label>
        <input className={styles.input} type="text" id="title" name="title" /><br />
        
        <label className={styles.label} htmlFor="cost">Product Cost *</label>
        <input className={styles.input} type="text" id="cost" name="cost" /><br />
      
        <label className={styles.label} htmlFor="price">Sell Price *</label>
        <input className={styles.input} type="text" id="price" name="price" /><br />

        <label className={styles.label} htmlFor="size">Attribute1 (size)</label>
        <input className={styles.input} type="text" id="size" name="size" /><br />
      
        <label className={styles.label} htmlFor="color">Attribute2 (color)</label>
        <input className={styles.input} type="text" id="color" name="color" /><br />
        
        <label className={styles.label} htmlFor="attribute3">Attribute3</label>
        <input className={styles.input} type="text" id="attribute3" name="attribute3" /><br />
        
        <label className={styles.label} htmlFor="attribute4">Attribute4</label>
        <input className={styles.input} type="text" id="attribute4" name="attribute4" /><br />
    
        <label className={styles.label} htmlFor="category">Category *</label>
        <input className={styles.input} type="text" id="category" name="category" /><br />

        <label className={styles.label} htmlFor="summary">Summary *</label>
        <textarea className={styles.textarea} id="summary" name="summary" /><br />

        <label className={styles.label} htmlFor="specification">Specification</label>
        <textarea className={styles.textarea} id="specification" name="specification" /><br />

        <label className={styles.label} htmlFor="SupplierId">Supplier ID *</label>
        <input className={styles.input} type="number" id="SupplierId" name="SupplierId" /><br />
        
        <button className={styles.btn} type="submit">Create</button>
     </form>
     </main>
  )
}