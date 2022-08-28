import React, {useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import decode from 'jwt-decode'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import search from '../../assets/magnifying-glass-solid.svg'
import Avatar from '../../component/Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var User = useSelector((state) =>(state.currentUserReducer))

    useEffect(() =>{
        const token = User?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    const handleLogout = () =>{
        dispatch({type:'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    return (
    <nav className='main-Nav'>
        <div className='navbar'>
            <Link to="/" className='nav-itm nav-logo'>
                <img src={logo} alt="logo" />
            </Link>
            <Link to="/" className='nav-itm nav-btn'>About</Link>
            <Link to="/" className='nav-itm nav-btn'>Products</Link>
            <Link to="/" className='nav-itm nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search..'/>
                <img src={search} alt="Search" width={'18'} className='Searchicon'/>
            </form>
            {User === null?
                <Link to="/Auth" className='nav-itm nav-links'>Log in</Link>:
                <>
                    <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%'><Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className='nav-itm nav-links' onClick={handleLogout}>Log Out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar

