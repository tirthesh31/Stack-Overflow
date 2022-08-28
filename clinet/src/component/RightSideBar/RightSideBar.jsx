import React from 'react'
import './RightSideBar.css'
import Widget from '../RightSideBar/Widget'
import WidgetTags from './WidgetTags'

const RightSideBar = () => {
  return (
    <aside className='right-Sidebar'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}

export default RightSideBar
