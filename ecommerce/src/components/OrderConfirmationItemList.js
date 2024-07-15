"use client"

import styles from './OrderConfirmationItemList.module.css'

export default function OrderConfirmationListItem({product}) {

  return (
    <div className={styles.item_container}> 
      <h3 className={styles.title}>{product.product_title}</h3>
      <p className={styles.sell_price}>NZD {product.sell_price}</p>
      <p className={styles.quantity}>Quantity: {product.quantity}</p>
    </div>
  )
}