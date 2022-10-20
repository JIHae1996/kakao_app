import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.scss';
import Lists from '../components/Lists';
import detas from '../db/detas.json'
import { FaSearch } from "react-icons/fa";

function Friends() {
  return (
    <>
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
            <li>
              <Link to='/Profile'>
                <span class="profile_img empty"></span>
                <span class="Profile_name">Friends' Name Display</span>
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
          )).slice([1],[11])}
          </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default Friends;
