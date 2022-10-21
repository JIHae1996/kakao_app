import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';
import Lists from '../components/Lists';
import detas from '../db/detas.json'
import { FaSearch } from "react-icons/fa";
import TabBar from '../components/TabBar'

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";


// const filterData = data.filter(조건);
// filterData.map

// if(객체.id != My Name 아이디) 

function Friends() {
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
        <h1>Friends<span>1</span></h1>
        <div class="left_item"><a href="#">Manage</a></div>
        <div class="right_item"><a href="#"><BsGearFill /></a></div>
    </div>
    </header>
    <hr />
      <main>
      <form class="search_box">
        <fieldset class="search_inner">
            <legend class="blind">검색창</legend>
            <FaSearch/>
            <input type="search" name="search" id="search"
            placeholder="Find friends, chats, Plus Friends" />
        </fieldset>
      </form>

      <section class="main_section">
        <header><h2>My Profile</h2></header>
        <ul>
            <li>
                <Link to='/Profile'>
                <span class="profile_img empty"></span>
                <span class="Profile_name">My Name</span>
                
                </Link>
            </li>
        </ul>
      </section>

        <section class="main_section">
        <header><h2>Friends</h2></header>
        <ul>
        <li>
          {detas.map((detas) => (
                <Lists
                propsimage={detas.image} propsname={detas.name} propstitle={detas.title} 
                />
          )).slice([2],[11])}
          </li>
          </ul>
        </section>
      </main>
      <TabBar />
    </>
  );
}

export default Friends;
