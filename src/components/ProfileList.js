import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Profile.scss'
import { FaComment } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import profiledb from "../db/profiledb.json";

function ProfileList({propsimg, propsid, propsemail, propsbg}) {


  return (
    <main className='profile_main'>
    <section class="background">
        <h2 class="blind">My profile background image</h2>
        <span className='bg_span'><img src={propsbg} alt={propsid} 
        className="bg_photo"/></span>
    </section>
    <section class="profile">
        <h2 class="blind">My profile info</h2>
        <div class="profile_img"><img src={propsimg} alt={propsid} 
        className="photo"/></div>
        <div class="profile_cont">
            <span class="profile_name">{propsid}</span>
            <input type="mail" class="profile_email" placeholder={propsemail}/>
            <ul class="profile_menu">
                <li>
                    <Link to='/Chatting'>
                        <span class="icon">
                            <FaComment />
                        </span>    
                        My chatroom
                    </Link>
                </li>
                <li><a href="#"><span class="icon"><BsFillPencilFill /></span>Edit Profile</a></li>
            </ul>
        </div>
    </section>
    </main>
  )
}

export default ProfileList