import React from 'react'
import '../styles/Chatting.scss'


function Chatting() {
  return (
    <div class="body">
    <main class="Chatting_main">
    <span class="date_info">Monday,October 17, 2022</span>
    <div class="chat_box my">
        <span class="chat">Hello!</span>
        <span class="chat">Hello! This is a test message.</span>
        <span class="chat">This is a test message.</span>
        <span class="chat_time"><span>16</span>:<span>30</span></span>
    </div>
    <div class="chat_box other">
        <div class="other_info">
            <a href="#"><span class="profile_img empty"></span></a>
            <span class="profile_name">Friend Name</span>
        </div>
        <span class="chat">And this is an answer</span>
        <span class="chat">And this is an answer And this is an answer</span>
        <span class="chat">And this is an answer</span>
        <span class="chat_time"><span>17</span>:<span>33</span></span>
    </div>
  </main>
  </div>
  )
}

export default Chatting