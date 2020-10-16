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
                "tweet_text": "I want to thank all of you for your prayers.",
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
                },
                {
                "tweet_id": 4,
                "user_id": 2,
                "tweet_text": "It is inspiring to see youth across the country proud to share their commitment to living drug-free. Use the hashtag #BeDrugFree & share how you’re positively impacting your community!",
                "tweet_image": " ",
                "time_stamp": "11. Okt.",
                "likes": "2541"
                },
                {
                "tweet_id": 5,
                "user_id": 2,
                "tweet_text": " This week I am highlighting the work of \r\n@DrugFreeCecil\r\n in MD & what they are doing to #BeDrugFree. Throughout #COVID19 they creatively added an at-home drug disposal kit to bags of food they packaged & delivered to over 400 families in need.",
                "tweet_image": "https://pbs.twimg.com/media/EkYaEU_WsAAwXWT?format=jpg&name=large",
                "time_stamp": " 08. Okt.",
                "likes": "1245"
                },
                {
                "tweet_id": 6,
                "user_id": 2,
                "tweet_text": "To all who have reached out - thank you. Here is my personal experience with COVID-19",
                "tweet_image": " ",
                "time_stamp": "05. Okt.",
                "likes": "3457"
                },
                {
                "tweet_id": 8,
                "user_id": 3,
                "tweet_text": " Developing and manufacturing vaccines won’t end the pandemic quickly unless we also deliver them equitably. Here is why it’s critical that vaccines are distributed in proportion to the global population",
                "tweetimage": "https://pbs.twimg.com/media/EjBVzcaUcAAmzw?format=jpg&name=4096x4096",
                "time_stamp": " 07. Okt.",
                "likes": "3487"
                },
                
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