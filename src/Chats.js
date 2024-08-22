import React from "react";
import "./Chats.css"
import Chat from "./Chat";

function Chats(){
    return(
        <div className="chats">
        <Chat 
        name="Sarah"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg"/>

        <Chat 
        name="Mary"
        message="Heyy!"
        timestamp="35 minutes ago"
        profilePic="https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg"/>

        <Chat 
        name="Emily"
        message="What's up"
        timestamp="55 minutes ago"
        profilePic="https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg"/>

        <Chat 
        name="Natasha"
        message="How you doing"
        timestamp="3 days ago"
        profilePic="https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg"/>
        
        </div>
    )
}
export default Chats;

