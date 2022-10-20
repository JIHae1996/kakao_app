import React from 'react';
import { FaPlane, FaWifi, FaMoon, FaBluetoothB, FaBatteryFull } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import '../styles/Header.scss';
import '../styles/Common.scss';

function Header() {
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
  </>
  )
}

export default Header