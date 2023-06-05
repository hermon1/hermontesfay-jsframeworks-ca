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

const Product = () => {

  const {id} = useParams();

  const {data, isLoading, isError} = useContext(ProductContext);
 
  const [product, setProduct] = useState(false);
  
  useEffect(()=>{
    const target = data.find((product)=>product.id === id)
    setProduct(target)
  },[data, id, product])
  return (
    <SingleProductMain>
      {}
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