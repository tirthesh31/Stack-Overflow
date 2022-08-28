import React from 'react'
import LeftSideBar from '../../component/LeftSideBar/LeftSideBar'
import './Users.css'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList'

const Users = () => {
    const location = useLocation();
  return (
    
    <div className="home-container-1">
        <LeftSideBar/>
        <div className="home-container-2" style={{marginTop:"50px"}}>
              <h1 style={{fontWeight:"400"}}>Users</h1>
              <UsersList/>
        </div>
    </div>
  )
}

export default Users
