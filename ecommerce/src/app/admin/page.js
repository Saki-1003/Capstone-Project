// import styles from './page.module.css'
// import ImagePicker from '@/Component/imagePicker'
import { createProduct } from "@/backend/server_actions/create"

export default function CreateProductPage() {


  return(
    <main>
    <h1>Add new product</h1>
    <form action={createProduct}>

      <label htmlFor="code">Product code:</label><br />
      <input type="number" id="code" name="code" /><br />

      <label htmlFor="title">product name:</label><br />
      <input type="text" id="title" name="title" /><br />
      
      <label htmlFor="cost">Product cost:</label><br />
      <input type="text" id="cost" name="cost" /><br />
     
      <label htmlFor="price">Sell price:</label><br />
      <input type="text" id="price" name="price" /><br />
      
      <label htmlFor="quantity">Quantity:</label><br />
      <input type="number" id="quantity" name="quantity" /><br />

      <label htmlFor="size">attribute1 (size):</label><br />
      <input type="text" id="size" name="size" /><br />
     
      <label htmlFor="color">attribute2 (color):</label><br />
      <input type="text" id="color" name="color" /><br />
      
      <label htmlFor="attribute3">attribute3:</label><br />
      <input type="text" id="attribute3" name="attribute3" /><br />
      
      <label htmlFor="attribute4">attribute4:</label><br />
      <input type="text" id="attribute4" name="attribute4" /><br />
   
      <label htmlFor="category">category:</label><br />
      <input type="text" id="category" name="category" /><br />

      <label htmlFor="summary">summary:</label><br />
      <textarea id="category" name="category" /><br />

      <label htmlFor="specification">specification:</label><br />
      <textarea id="specification" name="specification" /><br />
      
      <button type="submit">create</button>
    </form>
   
  </main>
  )
}