import React from 'react'
import { FaUserAlt, FaComment, FaSearch, FaEllipsisH } from "react-icons/fa";
import '../styles/TabBar.scss'
import {Link} from 'react-router-dom'

function TabBar() {
  return (
    <>
    <nav class="tab_bar">
    <ul>
        <li><Link to='/'><FaUserAlt />Friends</Link></li>
        <li><Link to='/Chats'><FaComment />Chats</Link></li>  
        <li><Link to='/Find'><FaSearch />Find</Link></li>
        <li><Link to='/More'><FaEllipsisH />More</Link></li>
    </ul>
  </nav>
</>
  )
}

export default TabBar