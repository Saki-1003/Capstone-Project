"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from '../../page.module.css'
import { useState, useEffect, useContext } from "react";
import { useParams } from "next/navigation";
import { LoginContext } from "@/context/LoginContext";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { getProducts } from "@/backend/db_query/product";
import { createCartItem } from "@/backend/server_actions/cart";


export default function ProductDetailPage() {
  const {loginDetails} = useContext(LoginContext)
  const {cartContent, handleChange} = useContext(ShoppingCartContext)
  const [products, setProducts] = useState({})
  const params = useParams()

  useEffect(()=>{
    async function getData() {
      const products = await getProducts()
      console.log(products)

      //Find the product that matches the param(ProductId)
      const product = products.find(item=>item.ProductId==params.id)
      product.quantity=1
      setProducts(product)
    }
    getData()
  },[])


  //Create cart_item 
  const handleAddToCart = async() => {
    if(!loginDetails.UserId) {
      alert('Please login')
      return
    }
    const cartItem = {
      ProductId: products.ProductId, 
      UserId: loginDetails.UserId
    }
    await createCartItem(cartItem)
  }

  return(
    <>
      <Header />
      <main className={styles.product_detail_container}>
        <figure className={styles.image_wrrapper}>
          <img className={styles.propduct_detail_img} src="/product1.jpg" />
        </figure>
        <section className={styles.flexitem_section}>
          <h2 className={styles.product_detail_title}>{products.product_title}</h2>
          <h2 className={styles.product_detail_sell_price}>NZD {products.sell_price}</h2>
          <div className={styles.btn_wrapper}><button onClick={handleAddToCart} className={styles.btn}>Add to cart</button></div>
          <p className={styles.product_detail_summary}>Summary:</p>
          <p className={styles.product_detail_text}>{products.summary}</p>
          <p className={styles.product_detail_spec}>Specification:</p>
          <p className={styles.product_detail_text}>{products.specification}</p>
        </section>
        <Link className={styles.link} href="/product">Back to all products</Link>
      </main>
      <Footer />
    </>

  )
}