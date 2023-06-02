import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/Products';
import { SingleProductMain } from './index.styles';
import SingleProduct from '../../components/Products/SingleProduct';
import Reviews from '../../components/Reviews';
import { useEffect } from 'react';
import { useState } from 'react';
import Back from '../../components/Button/Back';
import Error from '../../components/Error';
import SingleProductLoader from '../../components/Loader/SingleProduct';
import ReviewsLoader from '../../components/Loader/Reviews';
/**
 * @description shows either an placeholder/skeleton product page, an error page or a product + review based on the 3 states from ProductContext
 * @returns Product page component
 */
const Product = () => {
  //gets id from url
  const {id} = useParams();
  //get all products
  const {data, isLoading, isError} = useContext(ProductContext);
  //starts as false so no errors show in return
  const [product, setProduct] = useState(false);
  //finds the product with correct id, i could use a fetch to get the correct id, but i this is faster. and on hard refresh it still works.
  useEffect(()=>{
    const target = data.find((product)=>product.id === id)
    setProduct(target)
  },[data, id, product])
  return (
    <SingleProductMain>
      {/*temp loading and error displaying*/}
      {isLoading && <><SingleProductLoader/> <ReviewsLoader/></>}
      {isError && <Error/>}
      {product ? 
        <>
          <SingleProduct description={product.description}  imageUrl={product.imageUrl} id={product.id} title={product.title} price={product.price} discountedPrice={product.discountedPrice} onDiscount={(product.discountedPrice < product.price)}/>
          <Reviews reviews={product.reviews} rating={product.rating}/> </>: null}
          <Back/>
    </SingleProductMain>
  )
}

export default Product