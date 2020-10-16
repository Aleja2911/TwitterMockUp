import React, { Fragment, useState } from "react"


const SearchBar = ({ searchData }) => {
    const [search, setSearch] = useState(null)
    const [input, setInput] = useState(null);


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
// ---- searchbar  functions ends here-- //

    return (

    <div className="SearchBar">

        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}> search </button>
        <button onClick={handleReset}> reset </button>
        {/* {searchData
            .filter((post) => 
                search ? post.message.includes(search) : post)
            .map((post) => {
                return (
                    <Fragment key={post.id}>
                        <h2> {post.message}</h2>
                    </Fragment>

                )
            })


        } */}
        
    </div>

    )
}


export default SearchBar; 