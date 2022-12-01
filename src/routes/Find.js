import React from 'react'
import { FaAddressBook, FaQrcode, FaEnvelope } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import '../styles/Find.scss'
import TabBar from '../components/TabBar'
import '../styles/Header.scss'

import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

function Find() {
  return (
    <main className='main'>
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
            <h1>Find</h1>
            <div class="left_item"><a href="#">Edit</a></div>
            <div class="right_item"></div>
        </div>
    </header>
    <hr />
    <main>
    <ul class="find_method">
        <li><a href="#"><FaAddressBook />Find</a></li>
        <li><a href="#"><FaQrcode />QR code</a></li>
        <li><a href="#"><ImMobile />Shake</a></li>
        <li><a href="#"><FaEnvelope />Invite via SNS</a></li>
    </ul>
    <section class="recommend_section">
        <header><h2>Recommend Friends</h2></header>
        <ul>
            <li>You Have no recommend friends.</li>
        </ul>
    </section>
    </main>
    <TabBar />
    </main>
  )
}

export default Find