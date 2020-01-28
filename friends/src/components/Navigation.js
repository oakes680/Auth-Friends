import logo from "../friends.jpg";
import React from "react";
import { Link, Route  } from "react-router-dom";
import Login from "../components/login/Login";
import Friends from './Friends'
import AddNewFriend from './AddNewFriend'
import ProtectedRoute from '../components/ProtectedRoute'
import{getToken} from '../utils/axiosWithAuth'

const Navigation = () => {
  
  const signedIn = getToken()
 console.log('asdsadsadasdsa', signedIn)

 
  return (
    <div className="nav-container">
      <div className="nav-logo-container">
        <img className="logo" src={logo} alt="friends show logo" />
      </div>
      <div className="nav-link-container">
        <ul>
          <Link id="home" className="nav-link" to="/">
            Home
          </Link>

      
          <Link id="log" className="nav-link" to="/login">
            Login
          </Link>

          <Link id="log" className="nav-link" to="/Addfriends">
            Add a Friend
          </Link>
          
           <Link id="friends" className="nav-link" to="/friends">
            Friends
          </Link>

        </ul>
      </div>

      <Route exact path="/">
        Click the Login in link!
      </Route>
      <ProtectedRoute  path="/friends" component={Friends}/>
      <ProtectedRoute  path="/Addfriends" component={AddNewFriend}/>
      <Route  path="/login" component={Login} />
      
    </div>
  );
};

export default Navigation;