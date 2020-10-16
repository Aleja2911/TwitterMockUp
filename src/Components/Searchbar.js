import React, { Fragment, useState } from "react"

const data = {
    tweets: [{
            id: 1,
            tweet_text: 'ma boyyyyyy, thanks for being such a wonderful friend',
            tweet_image: './tweet1.png',
            timestamp: '01/01/2020',
            likes: 1,
            user_id: 1
            },
            {
            id: 1,
            tweet_text: 'random tweeeeeet',
            tweet_image: './tweet2.png',
            timestamp: '01/01/2020',
            likes: 1,
            user_id: 2

            },
            {
            id: 1,
            tweet_text: 'random tweeeeeet',
            tweet_image: null,
            timestamp: '01/01/2020',
            likes: 1,
            user_id: 3
            }]
};

   

const SearchBar = () => {
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
         {data.tweets
            .filter((post) => 
                search ? post.tweet_text.includes(search) : post)
            .map((post) => {
                return (
                    <Fragment key={post.id}>
                        <h2> {post.tweet_text}</h2>
                    </Fragment>

                )
            })


        } 
        
    </div>

    )
}


export default SearchBar; 