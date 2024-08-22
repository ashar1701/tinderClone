import React from "react";
import "./Chat.css";
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";

function Chat({name,message,timestamp,profilePic}){
    return(
        //adds a link to the name which redirects to /chat/(name of the person)
    <Link to={`/chat/${name}`}>   
    <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
        
    </div>
    </Link>
    )
}

export default Chat;