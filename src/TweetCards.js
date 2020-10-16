import React from "react";
import './TweetCards.css';

import TweetCard from './TweetCard.js'
import tweet1 from './tweet1.png';
import tweet2 from './tweet2.png';



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


const TweetCards = ()=>{
    //useEffect to fetch Tweet card data /messages: 
   const data = {
            tweets: [
                {
                "tweet_id": 1,
                "user_id": 1,
                "tweet_text": "Cuomo Dodges on Whether Sending COVID Patients into Nursing Homes Was a Mistake",
                "tweet_image": "https://pbs.twimg.com/card_img/1315719666241683458/1m4MNFaU?format=jpg&name=small",
                "time_stamp": "09.Okt",
                "likes": "500"
                },
                {
                "tweet_id": 2,
                "user_id": 1,
                "tweet_text": "\"I want to thank all of you for your prayers.\"",
                "tweet_image": "",
                "time_stamp": "10. Okt",
                "likes": "1450"
                },
                {
                "tweet_id": 3,
                "user_id": 1,
                "tweet_text": "I will be interviewed by @seanhannity tonight at 9:00 P.M. ",
                "tweet_image": "",
                "time_stamp": "12. Okt",
                "likes": "1583"
                }
                ]
    };

//{id, tweet_text, tweet_image, timestamp, likes, userid}
    return(
        <div className="tweets-container" >
            {data&&data.tweets.map((tweet,index)=>{
                return(
                    <>
                    <TweetCard tweet={tweet}/>
                </>
                )
            })}
        </div>

    )
}

export default TweetCards;