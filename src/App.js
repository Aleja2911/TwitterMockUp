import React, { useEffect, useState  } from 'react';
import './App.css';

import SearchBar from "./Components/Searchbar";


function App() {
const [search, setSearch] = useState(null)
const [input, setInput] = useState(null)

// get all All (Searchbar) //
useEffect(() => {
  fetch('https://run.mocky.io/v3/773a3aa4-ac2c-4647-b086-2437d92c2cec')
  .then(response => response.json())
  .then((response) => {
          setSearch(response.items);
        })
        .catch((error) => console.log("ERROR"));
      }, []);

  //------End Search Fetch -----//


  //--- search bar functions --- //
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleReset = () => {
        setSearch(null)
    };

    const handleClick = () => {
        setSearch(input);
    }; 
// ---- searchbar  functions ends here--//



  return (
    
    <div> 
     <h1> Hello World </h1>
      <SearchBar search={search} input={input} />

    </div>
  );
}

export default App;
