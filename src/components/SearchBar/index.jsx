import {useContext} from 'react'
import { InnerSearchBar, Search } from './index.styles'
import { ProductContext } from '../../context/Products'
import { useLocation } from 'react-router-dom'
import SearchResult from '../SearchResult'
import useSearch from '../../hooks/useSearch'


const SearchBar = () => {
  const {dataToDisplay} = useContext(ProductContext);
  const location = useLocation();

  const { search,
    updateSearch,
    showResults,
    focus,
    showResult,
    hideResult,
    clicked,
    searchResultRef} = useSearch(dataToDisplay, location);


  return (
    <InnerSearchBar>
      <div className='search'>
        <Search  onBlur={hideResult} onFocus={showResult} onChange={updateSearch} value={search} placeholder='Search'/>
        {focus && showResults.length > 0 ? <div  ref={searchResultRef} className='searchResult'>
          {showResults.map(item =>{
            return <SearchResult key={item.id} action={clicked} data={item}/>
          })}
        </div> :  null}
        </div>
      
    </InnerSearchBar>
  )
}
export default SearchBar

