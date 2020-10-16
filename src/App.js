

import React, { useEffect, useState  } from 'react';
import TweetCards from './TweetCards.js';
import {Link, Switch, Route} from 'react-router-dom'
import UserInfoCard from './UserInfoCard'
import AllUserMessages from './AllUserMessages'


import './App.css';
import Footer from "./Components/footer";
import  "./images/sky.png"




import SearchBar from "./Components/Searchbar";



    


function App() {
const [search, setSearch] = useState(null)
const [input, setInput] = useState(null)

// get all All (Searchbar) //
// useEffect(() => {
//   fetch('')
//   .then(response => response.json())
//   .then((response) => {
//           setSearch(response.messages);
//         })
//         .catch((error) => console.log("ERROR"));
//       }, []);

  //------End Search Fetch -----//
  return (
<div>
    <div> 
     <h1> Hello World </h1>
      <SearchBar search={search} input={input} />

    </div>
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
