
import ProductCard from "@/components/productCard";
import { getProducts } from "@/backend/db_query/product";
import styles from '../page.module.css'
import Header from "@/components/Header";


export default async function ProductPage() {
  const products = await getProducts()
  console.log(products)

  return (
    <>
      <Header />
      <main>
        <h2 className={styles.product_heading}>Our Products</h2>
        <div className={styles.card_container}>
        {products.map((product) => <ProductCard product={product} />)}
        </div>
      </main>
    </>
  );
}