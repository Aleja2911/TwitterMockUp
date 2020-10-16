import React from "react";
import giraffe from './giraffe.png';
import elephant from './elephant.png';
import monkey from './monkey.png';



const TweetCard = (props) =>{
    const tweet=props.tweet;
    // fetch individiual userdata here  /users/{id}:
    const users = [
        {
        "user_id": 1,
        "username": "D_Trump",
        "email": "D_Trump@gmail.com",
        "password": "sbdjdsa__",
        "profile_pic": "https://pbs.twimg.com/profile_images/859982100904148992/hv5soju7_400x400.jpg"
        },
        {
        "user_id": 2,
        "username": "M_Trump",
        "email": "M_Trump@gmail.com",
        "password": "dsf8encf",
        "profile_pic": "https://pbs.twimg.com/profile_images/848946510918295557/RmsOl1zv_400x400.jpg"
        },
        {
        "user_id": 3,
        "username": "B-Gates",
        "email": "B-Gates@gmail.com",
        "password": "sq0ßw2",
        "profile_pic": "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
        },
        {
        "user_id": 4,
        "username": "ElonMusk",
        "email": "ElonMusk@gmail.com",
        "password": "sjfio09´",
        "profile_pic": "https://pbs.twimg.com/profile_images/1295975423654977537/dHw9JcrK_400x400.jpg"
        },
        {
        "user_id": 6,
        "username": "JoeRogan",
        "email": "JoeRogan@gmail.com",
        "password": "98siohjd98ss",
        "profile_pic": "https://pbs.twimg.com/profile_images/552307347851210752/vrXDcTFC_400x400.jpeg"
        }
        ]


    return(
            <div  >
                <table className="tweetCard" >
                <tr style={{borderBottom: '1px solid black'}}>
                    <td>
                        <div key ={tweet.id} >
                            <img className="userIcon" alt="hi" src={users[tweet.user_id].profile_pic}/> 
                        </div>
                    </td>
                    <td>
                        <div>
                            {users[tweet.user_id].username}
                        </div>
                    </td>
                    <td>
                        <div>
                            {tweet.timestamp}
                        </div>
                    </td>
                    </tr>
                    
                        <tr className="tweetText" style={{borderBottom: '1px solid black'}}>
                            <td colSpan="3">
                                <div >
                                {tweet.tweet_text}
                                </div>
                            </td>
                        </tr>
                       
                            {tweet.tweet_image&& 
                                <tr  >
                                <td >
                                <div>
                                    <img className="tweetImage" src={tweet.tweet_image} alt="tweet"/>
                                </div>
                                </td>
                                </tr>}
                           
                        
                    </table>
            
            </div>
    )

}

export default TweetCard;