import React from 'react'
import '../styles/Chats.scss'
import { Link } from 'react-router-dom';

function ChatList({propsimg, propsid}) {
  return (
    <Link to='/Chatting'>
    <span class="chats_img empty"><img src={propsimg} alt={propsid} /></span>
    <span class="chats_cont">
        <span class="chats_name">{propsid}</span>
        <span class="chats_latest">Hello! This is a test message!</span>
    </span>
    <span class="chats_time"><span>15</span>:<span>33</span></span>
    </Link>
  )
}

export default ChatList




