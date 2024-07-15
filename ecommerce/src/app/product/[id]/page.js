"use client"
import { getProducts } from "@/backend/db_query/product";
import Header from "@/components/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from '../../page.module.css'



export default function ProductDetailPage() {

  const [products, setProducts] = useState({})
  const params = useParams()

  useEffect(()=>{
    async function getData() {
      const products = await getProducts()
      const product = products.find(item=>item.ProductId==params.id)
      console.log(products)
      setProducts(product)
    }
    getData()
  },[])



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
          <label className={styles.quantityLabel} htmlFor="quantity">Quantity:</label>
          <input className={styles.input} type="number" name="quantity" id="quantity" /><br />
          <div className={styles.btn_wrapper}><button className={styles.btn}>Add to cart</button></div>
          <p className={styles.product_detail_summary}>Summary:</p>
          <p className={styles.product_detail_text}>{products.summary}</p>
          <p className={styles.product_detail_spec}>Specification:</p>
          <p className={styles.product_detail_text}>{products.specification}</p>
        </section>
        <Link className={styles.link} href="/product">Back to all products</Link>
      </main>
    </>

  )
}