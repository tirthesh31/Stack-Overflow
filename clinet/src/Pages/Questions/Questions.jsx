import React from 'react'
import LeftSideBar from '../../component/LeftSideBar/LeftSideBar'
import RightSideBar from '../../component/RightSideBar/RightSideBar'
import HomeMainBar from '../../component/HomeMainBar/HomeMainBar'
import '../../App.css'
const Questions = () => {
  return (
    <div className='home-container-1'>
        <LeftSideBar/>
        <div className="home-conatainer-2">
          <HomeMainBar/>
          <RightSideBar/>
        </div>
    </div>
  )
}

export default Questions 
