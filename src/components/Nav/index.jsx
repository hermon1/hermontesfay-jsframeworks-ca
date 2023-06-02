import Navigation from './Navigation';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { NavModalContext } from '../../context/NavModal';
import { useContext } from 'react';
import { NavButton } from './index.styles';
/**
 * @description gives back an modal button or two links to home and contact
 * @returns the navigation
 */
const Nav = () => {
    const {width, setModalStatus} = useContext(NavModalContext)
    return ((width > 1024) ? <Navigation/> : <NavButton aria-label='Open Menu button' onClick={()=>{setModalStatus(true)}}><MenuRoundedIcon fontSize='large' sx={{width:30}} color='info'/></NavButton>)
}

export default Nav