import React from 'react'
import './LeftSideBar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.png'
const LeftSideBar = () => {
  return (
    <div className='left-Sidebar'>
      <nav  className='side-Nav'>
        <NavLink to='/' className='side-Nav-Links' activeClassName='active'>
          <p>Home</p>
        </NavLink>
        <div className="side-Nav-Div">
          <div><p>Public</p></div>
          <NavLink to='/Questions' className='side-Nav-Links' activeClassName='active' style={{paddingleft:'40px'}}>
            <img src={Globe} alt="Global" style={{height:'12px',width:'12px'}}/>
            <p style={{paddingLeft:'10px'}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-Nav-Links' style={{paddingleft:'60px'}}>
            <p style={{paddingLeft:'30px'}}>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-Nav-Links' style={{paddingleft:'60px'}}>
            <p style={{paddingLeft:'30px'}}>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSideBar
