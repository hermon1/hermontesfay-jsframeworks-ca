import React from 'react'
import RatingSection from '../../Rating'
import { ProductCard, ImageSection, LowerCard } from '../../Products/Product/index.styles'
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom'
import Button from '../../Button'

const HomeLoader = () => {
return(<ProductCard>
    <ImageSection>
    <Skeleton variant='rounded' height={200}/>
    </ImageSection>
    <LowerCard>
    <h2 className='title'><Skeleton variant='text'/></h2>
    <Skeleton variant='text'>
    <RatingSection  rating={0} numberOfReviews={0}/>
    </Skeleton>
    
    <Skeleton className='productCardButton' variant='text'>
    <Link ><Button extraClass="" text="View Product"/></Link>
    </Skeleton>
    </LowerCard>
</ProductCard>
)
}

export default HomeLoader