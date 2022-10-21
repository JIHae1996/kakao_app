import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Chatting.scss'
import { FaPlus, FaRegSmile, FaMicrophone} from "react-icons/fa";

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaArrowLeft, FaBars } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";


function Chatting() {
  return (
    <>
    <header class="chattingheader">
        <div class="status_bar">
            <div class="left_item">
            <FaPlane />
              <FaWifi />
            </div>
            <div class="center_item">
                <span>15</span>:<span>33</span>
            </div>
            <div class="right_item">
            <FaMoon />
        <FaBluetoothB />
                <span><span>100</span>%</span>
                <FaBatteryFull />
            </div>
        </div>
        <div class="title_bar">
            <h1>Friend Name</h1>
            <div class="left_item"><Link to='/Chats'><FaArrowLeft /></Link></div>
            <div class="right_item"><a href="#"><HiMagnifyingGlass /><FaBars /></a></div>
        </div>
    </header>
    <hr />
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

  <footer class="footer">
  <span class="plus_btn"><a href="#"><FaPlus /></a></span>
  <form action="/" method="post">
      <fieldset class="text_box">
          <legend class="blind">채팅 입력창</legend>
          <label for="chatting" class="blind">채팅 입력</label>
          <input type="text" id="chatting" class="text_field" />
          <span class="emoticon_btn"><a href="#"><FaRegSmile /></a></span>
          <span class="voice_btn"><a href="#"><FaMicrophone /></a></span>
      </fieldset>
  </form>
  </footer>
  </div>
  </>
  )
}

export default Chatting