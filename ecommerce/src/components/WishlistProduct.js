"use client"
import styles from './WishlistProduct.module.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { deleteWishlistItem } from '@/backend/db_query/wishlist';
import { LoginContext } from '@/context/LoginContext';
import { useContext } from 'react'
import { createCartItem } from '@/backend/server_actions/cart';
import { WishlistContext } from '@/context/WishlistContext';

export default function WishlistProductItem({product}) {
  const {loginDetails} = useContext(LoginContext)
  const {added, deleteProduct} = useContext(WishlistContext)

    //Delete wishlist items
    function handleDeleteWishlistItem(e) {
      e.preventDefault()
      deleteProduct(product.ProductId)
      deleteWishlistItem({
        ProductId: product.ProductId, 
        UserId: loginDetails.UserId
      })
    }

    //Create cart item
    async function handleCreateCartItem() {
      const cartItem = {
        ProductId: product.ProductId, 
        UserId: loginDetails.UserId
      }
      await createCartItem(cartItem)
    }


  return (
    <div calssName={styles.card}>
      <figure className={styles.wishlist_figure}>
        <img className={styles.img} src="/product1.jpg" />
      </figure>
      <div className={styles.wishlist_desc}>
        <h3 className={styles.title}>{product.product_title}</h3>
        <h5 className={styles.price}>NZD {product.sell_price}</h5>
      </div>
      <div className={styles.icon_container}>
        <DeleteOutlineOutlinedIcon onClick={handleDeleteWishlistItem} className={styles.delete_icon} />
        <ShoppingCartOutlinedIcon onClick={handleCreateCartItem} className={styles.cart_icon}/>
      </div>
  </div>
  )
}