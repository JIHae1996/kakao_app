import React from 'react'
import '../styles/Profile.scss'

function Profile() {
  return (
    <main>
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
                            <i class="fa-solid fa-comment"></i>
                        </span>
                        My chatroom
                    </a>
                </li>
                <li><a href="#"><span class="icon"><i class="fa-solid fa-pencil"></i></span>Edit Profile</a></li>
            </ul>
        </div>
    </section>
</main>
  )
}

export default Profile