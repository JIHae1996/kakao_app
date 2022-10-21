import React from 'react'
import '../styles/More.scss'
import '../styles/Common.scss';
import { FaComment, FaSmile, FaPaintBrush, FaHandPeace, FaUserCircle, FaInfoCircle, FaUtensils, FaTv, FaGraduationCap, FaWonSign, FaVideo } from "react-icons/fa";
import { BsFillHouseFill, BsPencilFill } from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";
import TabBar from '../components/TabBar'

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";


function More() {
  return (
    <>
    <header class="header">
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
            <h1>More</h1>
            <div class="left_item"><a href="#">Edit</a></div>
            <div class="right_item"><a href="#"><BsGearFill /></a></div>
        </div>
    </header>
    <hr />

    <main class='main'>
    <section class="user_info">
        <h2 class="blind">사용자 정보</h2>
        <span class="profile_img empty"></span>
        <span class="profile_info">
            <span class="profile_name">My Name</span>
            <span class="profile_email">Userid.gmail.com</span>
        </span>
        <span class="chat_img"><a href="#"><FaComment /></a></span>
    </section>
    <section class="user_menu">
        <h2 class="blind">사용자 메뉴</h2>
        <ul>
            <li><a href="#"><FaSmile />Emotions</a></li>
            <li><a href="#"><FaPaintBrush />Themes</a></li>
            <li><a href="#"><FaHandPeace />Plus Friends</a></li>
            <li><a href="#"><FaUserCircle />Account</a></li>
        </ul>
    </section>
    <section class="plus_friends">
        <header>
            <h2>Plus Friends</h2>
            <span><FaInfoCircle />Learn More</span>
        </header>
        <ul class="plus_list">
            <li><a href="#"><FaUtensils />Order</a></li>
            <li><a href="#"><BsFillHouseFill />Store</a></li>
            <li><a href="#"><FaTv />TV Channel/Radio</a></li>
            <li><a href="#"><BsPencilFill />Creation</a></li>
            <li><a href="#"><FaGraduationCap />Education</a></li>
            <li><a href="#"><GiGreekTemple />Politics/Society</a></li>
            <li><a href="#"><FaWonSign />Finance</a></li>
            <li><a href="#"><FaVideo />Movies/music</a></li>
        </ul>
    </section>
    <section class="more_app">
        <h2 class="blind">앱 더보기</h2>
        <ul>
            <li><a href="#"><span class="app_icon"></span>Kakao Story</a></li>
            <li><a href="#"><span class="app_icon"></span>Path</a></li>
            <li><a href="#"><span class="app_icon"></span>Kakao friends</a></li>
        </ul>
    </section>
    </main>
    <TabBar />
    </>
  )
}

export default More