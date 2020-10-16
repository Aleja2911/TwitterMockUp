import React from "react";
import Footer from "./components/footer";
import  "./images/sky.png"
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
