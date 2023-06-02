import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCard, ProductCardImage, ImageSection, LowerCard } from './index.styles'
import RatingSection from '../../Rating'
import Discount from '../../Discount'
import Button from '../../Button'
/**
 * 
 * @param {object} props all the needed info to create a product card
 * @description creates an product card with the info given, also shows a discount component if on discount
 * @returns a product card component
 */
const Product = ({title, image, discountedPrice, oldPrice, onDiscount, rating, numberOfReviews, id}) => {
    return(
        <ProductCard>
            <ImageSection>
            {onDiscount ? <Discount originalPrice={oldPrice} newPrice={discountedPrice}/> : null}
            <ProductCardImage src={image} alt={title}/>
            </ImageSection>
            <LowerCard>
            <h2 className='title'>{title}</h2>
            <RatingSection  rating={rating} numberOfReviews={numberOfReviews}/>
            <p  className='price'>KR {discountedPrice}</p>
            <Link className='productCardButton' to={`/product/` + id}><Button extraClass="" text="View Product"/></Link>
            </LowerCard>
        </ProductCard>
    )
}

export default Product