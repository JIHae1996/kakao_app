import React from 'react'
import '../styles/Chats.scss'
import { FaSearch, FaComment } from "react-icons/fa";
import detas from '../db/detas.json'
import ChatList from '../components/ChatList';

function Chats() {
  return (
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
  )
}

export default Chats