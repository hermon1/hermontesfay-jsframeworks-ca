import React, {useContext} from 'react'
import { ProductContext } from '../../context/Products'
import { Home as MainHome } from './index.styles'
import Products from '../../components/Products'
import Error from '../../components/Error'
import HomeLoader from '../../components/Loader/Home'
import { Main } from '../../theme/theme'

const Home = () => {
    const loadingAmount = 25
    
    const {dataToDisplay, isLoading, isError, } = useContext(ProductContext);

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