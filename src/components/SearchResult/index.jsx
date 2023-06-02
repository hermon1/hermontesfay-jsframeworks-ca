import React from 'react'
import { SearchResultInner, SearchResultLink } from './index.styles'
/**
 * 
 * @param {object} props the title and price of a result, as well as an action
 * @description gives an search result item that have title and price, if clicked the action stops the onblur function on input so it can redirect 
 * @returns a single search result
 */
const SearchResult = ({data, action}) => {
  return (
    <SearchResultLink onClick={action} onTouchEnd={action} to={`/product/` + data.id}>
        <SearchResultInner>
            <p>{data.title}</p>
            <p className='price'>{data.discountedPrice},- </p>
        </SearchResultInner>
        </SearchResultLink>
  )
}

export default SearchResult