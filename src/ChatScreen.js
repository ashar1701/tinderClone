import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen(){
    const [input,setInput]=useState('')
    const [messages,setMessages]=useState([
        {
            name:"Sarah",
            image:"https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg",
            message:"Yo what's up"
        },
        {
            name:"Sarah",
            image:"https://img.freepik.com/premium-photo/passport-photo-portrait-asian-smiling-woman_264197-7671.jpg",
            message:"How's it going?"
        },
        //message sent by you
        {
            message:"Hey! How are you?"
        }
    ])
    const handleSend=e=>{
        e.preventDefault()   //prevents the screen from refreshing to default
        setMessages([...messages,{message: input}]);  //update the setMessages with new messages
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH SARAH ON 10/08/22</p>
            {messages.map(message=>(
                message.name?(
                    <div className="chatScreen__message">
                <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}
        
            <form className="chatScreen__input">
                <input value={input} onChange={(e)=>setInput(e.target.value)} className="chatScreen__inputField" placeholder="Type a message..." type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">Send</button>
            </form>
            
        </div>
    )

}
export default ChatScreen;