import { Skeleton } from '@mui/material'
import React from 'react'
import { SingleProductContent, ProductInfo, Price, Desc,Title, SinglePageImageSection } from '../../Products/SingleProduct/index.styles'
/**
 * 
 * @returns a single product, but with placeholders/skeleton for loading state
 */
const SingleProductLoader = () => {
    return (
        <SingleProductContent>
            <SinglePageImageSection>
              <Skeleton variant='rounded' height={250}/>
            </SinglePageImageSection>
            <ProductInfo>
                <Title><Skeleton variant='text'/></Title>
                <Desc><Skeleton variant='text' height={50}/></Desc>
                <Price><Skeleton variant='text' width={100}/></Price>
            </ProductInfo>
        </SingleProductContent>
      )
}

export default SingleProductLoader
