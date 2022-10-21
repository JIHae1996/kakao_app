import Profile from "./routes/Profile";
import Friends from "./routes/Friends";
import Chats from "./routes/Chats";
import Chatting from "./routes/Chatting";
import Find from "./routes/Find";
import More from "./routes/More";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Friends />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Chats' element={<Chats />} />
        <Route path='/Chatting' element={<Chatting/>} />
        <Route path='/Find' element={<Find />} />
        <Route path='/More' element={<More />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
