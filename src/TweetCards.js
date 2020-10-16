import React from "react";
import './TweetCards.css';



const TweetCards = ()=>{
    //useEffect to fetch data?
   const data = {users: [{
                    id: 1,
                    username: 'elli',
                    email: 'elli@whatever.com',
                    password: 'somePassword1',
                    profile_pic: "./elephant.png"
                    },
                    {
                    id: 2,
                    username: 'moni',
                    email: 'moni@whatever.com',
                    password: 'somePassword2',
                    profile_pic: './monkey.png'
                    },
                    {
                        id: 3,
                        username: 'gigi',
                        email: 'gigi@whatever.com',
                        password: 'somePassword3',
                        profile_pic: './giraffe.png'
                    }],
            tweets: [{
                    id: 1,
                    tweetText: 'ma boyyyyyy, thanks for being such a wonderful friend',
                    tweetImage: './tweet1.png',
                    timeStamp: '01/01/2020',
                    likes: 1,
                    user_id: 1,
                    profile_pic: './elephant.png'
                    },
                    {
                    id: 1,
                    tweetText: 'random tweeeeeet',
                    tweetImage: './tweet2.png',
                    timeStamp: '01/01/2020',
                    likes: 1,
                    user_id: 2,
                    profilePic: './monkey.png'

                    },
                    {
                    id: 1,
                    tweetText: 'random tweeeeeet',
                    tweetImage: null,
                    timeStamp: '01/01/2020',
                    likes: 1,
                    user_id: 3,
                    profilePic: './giraffe.png'
                    }]
    };


    return(
        <div >
        <img alt="" src="./elephant.png"/> 
            {data&&data.tweets.map((tweet,index)=>{
                return(
                    <>
                    <div key ={tweet.id}style={{border: 'solid 2px black'}} >
                        <img alt="" src="./elephant.png"/> 
                    </div>
                    </>
                )
            })}
        </div>

    )
}

export default TweetCards;