import React from 'react'
import Chat from './Chat'
import NavBar from './NavBar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavBar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar