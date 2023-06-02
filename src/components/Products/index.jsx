import React from 'react'
import Product from './Product'
/**
 * 
 * @param {object} props an array(products) of all the products to render 
 * @returns product cards of all products
 */
const Products = ({products}) => {
  return (
    products.map(product =>{
        return <Product key={product.id} title={product.title} image={product.imageUrl} discountedPrice={product.discountedPrice} oldPrice={product.price} onDiscount={(product.discountedPrice < product.price)? true:false} rating={product.rating} numberOfReviews={product.reviews.length} id={product.id}/>
    })
  )
}

export default Products