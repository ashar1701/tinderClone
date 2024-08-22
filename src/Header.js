import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Header.css";
import { IconButton } from "@mui/material";
import {Link,useNavigate} from "react-router-dom";

function Header({backButton}){
    const navigate=useNavigate(); //returns the session history
    return (
        <div className="header">
        {backButton ? (     //if back button is passed as a prop then render the back button
            <IconButton onClick={()=>navigate(backButton)}>   {/*navigate to the previous page*/}
                <ArrowBackIosIcon fontSize="large" className="header__backButton"/>
            </IconButton>
        ) : (      //else render the person icon
            <IconButton>    
            <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
            
        )}
        
        <Link to='/'>  {/*back to home page when tinder icon is clicked*/}
        <img className="header__logo" src="./tinder-logo.png" alt="tinder logo"/>
        </Link>
        <Link to='/chat'>  {/*goes to the chat page when clicked*/}
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />        
            </IconButton>
        </Link>
        
        </div>
    )
}

export default Header

