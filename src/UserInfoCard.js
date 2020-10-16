import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInfoCard = ()=>{
    return (<div>
 <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="//placehold.it/200" class="img-fluid" alt=""/>
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h4 class="card-title">User-Name</h4>
                    <p class="card-text">Description/Motto/Tweet of the day</p>
                    <ol>
                        <li>Member since:...</li>
                        <li>Email: only for registered users!</li>
                        <li>Last tweet:I love coding!</li>
                        <li>Tweets this month</li>
                        <li>Premium Chicken User</li>
                        

                    </ol>
                    <Link to="/usermessages" class="btn btn-primary">See all messages of User-Name</Link>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
            I love chickens...
        </div>
  </div>
    </div>)

}

export default UserInfoCard;