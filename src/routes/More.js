import React from 'react'
import '../styles/More.scss'
import '../styles/Common.scss';
import { FaComment, FaSmile, FaPaintBrush, FaHandPeace, FaUserCircle, FaInfoCircle, FaUtensils, FaTv, FaGraduationCap, FaWonSign, FaVideo } from "react-icons/fa";
import { BsFillHouseFill, BsPencilFill } from "react-icons/bs";
import { GiGreekTemple } from "react-icons/gi";


function More() {
  return (
    <main>
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
  )
}

export default More