import React from "react";
import './TweetCards.css';
import giraffe from './giraffe.png';
import elephant from './elephant.png';
import monkey from './monkey.png';



const TweetCards = ()=>{
    //useEffect to fetch data?
   const data = {users: [{
                    id: 1,
                    username: 'elli',
                    email: 'elli@whatever.com',
                    password: 'somePassword1',
                    profile_pic: elephant
                    },
                    {
                    id: 2,
                    username: 'moni',
                    email: 'moni@whatever.com',
                    password: 'somePassword2',
                    profile_pic: monkey
                    },
                    {
                        id: 3,
                        username: 'gigi',
                        email: 'gigi@whatever.com',
                        password: 'somePassword3',
                        profile_pic: giraffe
                    }],
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

//{id, tweet_text, tweet_image, timestamp, likes, userid}
    return(
        <div className="tweets-container" >
        <img alt=" hi" src={giraffe} /> 
            {data&&data.tweets.map((tweet,index)=>{
                return(
                    <>
                    <div key ={tweet.id}style={{border: 'solid 2px black'}} >
                        <img alt="hi" src={data.users[index].profile_pic}/> 
                    </div>
                    <div>
                        {data.users[index].username}
                    </div>
                    <div>
                        {tweet.timestamp}
                    </div>
                    {tweet.tweet_image&& 
                    <div>
                    <img src={tweet.tweet_image} alt="tweet"/>
                    </div>}
                </>
                )
            })}
        </div>

    )
}

export default TweetCards;