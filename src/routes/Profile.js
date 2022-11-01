import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Profile.scss'
import { FaComment } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaUserAlt } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

function Profile() {
  return (
    <body>
    <header class="Profile_header">
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
            <h1 clas="blind">Profile</h1>
            <div class="left_item"><Link to='/'><HiXMark color={"#111111"}/></Link></div>
            <div class="right_item"><a href="#"><FaUserAlt color={"#111111"}/></a></div>
        </div>
    </header>
    <hr />
    <main className='profile_main'>
    <section class="background">
        <h2 class="blind">My profile background image</h2>
    </section>
    <section class="profile">
        <h2 class="blind">My profile info</h2>
        <div class="profile_img empty"></div>
        <div class="profile_cont">
            <span class="profile_name">My Name</span>
            <input type="mail" class="profile_email" placeholder="UserID@gmail.com"/>
            <ul class="profile_menu">
                <li>
                    <a href="#">
                        <span class="icon">
                            <FaComment />
                        </span>
                        My chatroom
                    </a>
                </li>
                <li><a href="#"><span class="icon"><BsFillPencilFill /></span>Edit Profile</a></li>
            </ul>
        </div>
    </section>
    </main>
    </body>
  )
}

export default Profile