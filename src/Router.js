import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Auth from './routes/Auth';
import Friends from './routes/Friends';
// import TabBar from './components/TabBar';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Profile from './routes/Profile';
import Chatting from './routes/Chatting';

function AppRouter({isLoggedIn, userObj}) {

    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {isLoggedIn}
        {/* {isLoggedIn && <TabBar />} */}
        <Routes>
            {isLoggedIn ? (
            <>
            <Route path='/' element={<Friends userObj={userObj}/>} />
            <Route path='/Chats' element={<Chats userObj={userObj}/>} />
            <Route path='/Find' element={<Find userObj={userObj}/>} />
            <Route path='/More' element={<More userObj={userObj}/>} />
            <Route path='/Profile' element={<Profile userObj={userObj}/>} />
            <Route path='/Chatting' element={<Chatting userObj={userObj}/>} />
            </>
            ) : (
            <Route path='/' element={<Auth />}/>
            )}
            {/* 로그인이 되었을때 true면  <Route /> false면 후자 <Route /> 
            {isLoggedIn ? <Route/> : <Route />}*/}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter