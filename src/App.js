import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import "./Header.css";
import TinderCard from "react-tinder-card";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat/:person" element={<><Header backButton="/chat"/><ChatScreen /></>}></Route>
          <Route path="/chat" element={<><Header backButton="/"/><Chats /></>}></Route>  {/*on the chat page we pass a prop backButton which renders the backButton*/}
          <Route path="/" element={<><Header /><TinderCards /> <SwipeButtons /> </>}></Route>    {/*keep home route at the bottom always*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;



