import React from 'react'
import '../styles/Chats.scss'
import { FaSearch, FaComment } from "react-icons/fa";
import detas from '../db/detas.json'
import ChatList from '../components/ChatList';
import TabBar from '../components/TabBar'

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

function Chats() {
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
            <h1>Chats<span>1</span></h1>
            <div class="left_item"><a href="#">Edit</a></div>
            <div class="right_item"><a href="#"><BsGearFill /></a></div>
        </div>
    </header>

    <hr />
    <main>
    <form class="search_box">
        <fieldset class="search_inner">
            <legend class="blind">검색창</legend>
            <FaSearch />
            <input type="search" name="search" id="search"
            placeholder="Find friends, chats, Plus Friends" />
        </fieldset>
    </form>
    <section class="main_section">
        <header class="blind"><h2>Friends</h2></header>
        <ul>
           <li>
            {detas.map(detas => (
                <ChatList 
                propsimg={detas.image} propsid={detas.name}
                />
            )).slice([0],[11])}
            </li>
        </ul>
    </section>
    <div class="chat_fa_btn">
        <a href="#">
            <FaComment />
        </a>
    </div>
    </main>
    <TabBar />
    </>
  )
}

export default Chats