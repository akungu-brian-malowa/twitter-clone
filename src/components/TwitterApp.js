import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import "./TwitterApp.css"

const TwitterApp = () => {
  return (
    <div className='twitter'>
    {/* sidebar */}
    <Sidebar />
    {/* feed */}
    <Feed />
    {/* widjet */}
    <Widgets/>
    </div>
  )
}

export default TwitterApp