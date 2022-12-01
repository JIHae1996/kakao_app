import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Profile.scss'
import { FaComment } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import ProfileList from "../components/ProfileList";
import profiledb from "../db/profiledb.json";

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull, FaUserAlt } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";


function Profile() {

    const profile_cont = () => {
        for(let i=0; i<profiledb.length; i++){
            {profiledb.map((profiledb) => (
                <ProfileList
                propsimg={profiledb.img} 
                propsid={profiledb.id} 
                propsemail={profiledb.email} 
                propsbg={profiledb.bg} 
                />
          )).slice([(i-1)],[i])}
        }
    }
    
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
    {profiledb.map((profiledb) => (
                <ProfileList
                propsimg={profiledb.img} 
                propsid={profiledb.id} 
                propsemail={profiledb.email} 
                propsbg={profiledb.bg} 
                />
          )).slice([0],[1])} 
          
    </body>
  )
}

export default Profile;