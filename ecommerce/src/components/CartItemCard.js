"use client"
import { useState, useContext } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteCartItem } from '@/backend/db_query/cart';
import { LoginContext } from "@/context/LoginContext";
import styles from './CartItemCard.module.css'


export default function CartItemCard({product}) {
  const {loginDetails} = useContext(LoginContext)
  const [quantity, setQuantity] = useState(1)

  // Delete cart items
  // async function handleDeleteCartItems(e) {
  //   e.preventDefault()
  //   await deleteCartItem({
  //     ProductId: product.ProductId, 
  //     UserId: loginDetails.UserId
  //   })
  // }
  
  return (

    <div className={styles.card}>
      <div className={styles.img_div}>
        <img className={styles.img} src="/product1.jpg" />
      </div>
      <div className={styles.text_div}>
        <h3 className={styles.title}>{product.product_title}</h3>
        <h3 className={styles.price}>NZD {product.sell_price}</h3>
        <p className={styles.summary}>{product.summary}</p>
        <label className={styles.quantityLabel} htmlFor="quantity">Quantity:
          <input
            className={styles.input}
            name="quantity"
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          /></label>
          <DeleteOutlineOutlinedIcon className={styles.delete_icon} />
      </div>
    </div> 

  )
}