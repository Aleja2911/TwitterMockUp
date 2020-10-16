
import React from 'react';
import TweetCards from './TweetCards.js';
import {Link, Switch, Route} from 'react-router-dom'
import UserInfoCard from './UserInfoCard'
import AllUserMessages from './AllUserMessages'

import './App.css';
import Footer from "./components/footer";
import  "./images/sky.png"




function App() {
  return (
<div>
   <div> 
   <Link to='/userinfo'>Userinfo</Link>
   <Switch>
   <Route path="/userinfo">
   <UserInfoCard />
   </Route>
   <Route path="/usermessages">
   <AllUserMessages/>
   </Route>
   

  <TweetCards/>

  </Switch>


   </div>

    <div className="mainFrame">
      Aleja
      <div className="searchbar"></div>
      Staifo
      <div className="userInfo"></div>
      Yodit
      <div className="tweets"></div>
      <Switch>
        <Route path="/about">
          <Footer />
        </Route>
      </Switch>
    </div>
</div>
  );
}

export default App;
