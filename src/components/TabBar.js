import React from 'react'
import { FaUserAlt, FaComment, FaSearch, FaEllipsisH } from "react-icons/fa";
import '../styles/TabBar.scss'
import {Link} from 'react-router-dom'

function TabBar() {
  return (
    <>
    <nav class="tab_bar">
    <ul class="List">
        <li><Link to='/'><FaUserAlt style={{display: 'block', fontSize: '16' , margin:"0 auto" , marginBottom: "6px"}} />Friends</Link></li>
        <li><Link to='/Chats'><FaComment style={{display: 'block', fontSize: '16' , margin:"0 auto" , marginBottom: "6px"}}/>Chats</Link></li>  
        <li><Link to='/Find'><FaSearch style={{display: 'block', fontSize: '16' , margin:"0 auto" , marginBottom: "6px"}}/>Find</Link></li>
        <li><Link to='/More'><FaEllipsisH style={{display: 'block', fontSize: '16' , margin:"0 auto" , marginBottom: "6px"}}/>More</Link></li>
    </ul>
  </nav>
</>
  )
}

export default TabBar