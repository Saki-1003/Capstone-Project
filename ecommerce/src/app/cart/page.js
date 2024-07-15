"use client"
import { useContext, useState, useEffect } from "react";
import { getCartItems } from "@/backend/db_query/cart";
import { getProducts } from "@/backend/db_query/product";
import { LoginContext } from "@/context/LoginContext";
import CartItemCard from "@/components/CartItemCard";
import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import CheckoutButton from "@/components/CheckoutButton";
import CartIsEmpty from "@/components/CartIsEmpty";
import Header from "@/components/Header";
import styles from '../page.module.css'


export default function ShoppingCartPage() {
  const [productList, setProductList] = useState([])
  const {loginDetails} = useContext(LoginContext)
  const {cartContent, handleChange} = useContext(ShoppingCartContext)
  console.log(cartContent)


  useEffect(()=>{

    async function getData() {
      const cartItemData = await getCartItems()
      const productData = await getProducts()

      const filteredCartItems = cartItemData.filter((item)=>item.UserId===loginDetails.UserId)
      const productsInCart = productData.filter((product)=>filteredCartItems.find((item)=>item.ProductId===product.ProductId))
      const product = productsInCart.map((product)=> ({...product, quantity:1}))
      setProductList(product)
      handleChange(product)
    }
    getData()
  },[])

  const deleteCard = (ID) => {
    const remainingItems = productList.filter((product)=>product.ProductId !== ID)
    setProductList(remainingItems)
    handleChange(remainingItems)
  }

  const updateQuantity = (ID, quantity) => {
    const items = [...productList]
    items.find((product) => product.ProductId === ID).quantity=quantity
    setProductList(items)
    handleChange(items)
  }
  
  const cartItems = productList.length && productList.map((product)=><div><CartItemCard product={product} deleteCard={deleteCard} updateQuantity={updateQuantity} /></div>)
  
  return (
    <>
      <Header />
      <div className={styles.cart_container}>      
        <h2 className={styles.heading_shopping_cart}>Shopping Cart</h2>
        {cartItems}
        {productList.length ? <CheckoutButton /> : <CartIsEmpty />}
      </div>
 
    </>
  );
}