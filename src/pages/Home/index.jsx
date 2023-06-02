import React, {useContext} from 'react'
import { ProductContext } from '../../context/Products'
import { Home as MainHome } from './index.styles'
import Products from '../../components/Products'
import Error from '../../components/Error'
import HomeLoader from '../../components/Loader/Home'
import { Main } from '../../theme/theme'
/**
 * @description first shows placeholder/ skeleton product cards, then either an error or all the product cards based on it the fetch was successfull
 * @returns the home page with all the products
 */
const Home = () => {
    const loadingAmount = 25
    //still debating what to use, it seems to be the same amount of time...
    const {dataToDisplay, isLoading, isError, /*reset, setDataToDisplay*/} = useContext(ProductContext);
    //const {data, isLoading, isError} = useApi(baseUrl)
    if(isLoading){
        return(<MainHome >
            {[...Array(loadingAmount)].map((item,idx)=> {return <HomeLoader key={idx}/>})}
        </MainHome>)
    }
    if(isError){
        return(<Main><Error/></Main>)
    }
    return (
    
    <MainHome>
        <Products products={dataToDisplay}/>
    </MainHome>  )
}

export default Home