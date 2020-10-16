import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import UserInfoCard from './UserInfoCard'
import AllUserMessages from './AllUserMessages'
import './App.css';

function App() {

  
  return (
   <div> 
   <Link to='/userinfo'>Userinfo</Link>
   <Switch>
   <Route path="/userinfo">
   <UserInfoCard />
   </Route>
   <Route path="/usermessages">
   <AllUserMessages/>
   </Route>
   
  </Switch>

   </div>
  );
}

export default App;
