import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
import database from './firebase';
function TinderCards(){
    
    const [people, setPeople]=useState([
        {                              /*add info as needed*/
            name:"Steve Jobs",
            url:"./stevejobs.jpg"              
        },
        {
            name:"Bill Gates",
            url:"./bill-gates.jpg"
        }
    ]);
    /*push to an array in REACT*/
    /*setPeople=[...people, 'Armaan','Sharma']   this line keeps all the elements in the array as is and adds Armaan, Sharma to it*/
    
    /*piece of code that runs based on a condition*/
    useEffect(() => {
        //the following lines takes a snapshot of the firebase collection and access the data.
        //On accessing the data, it adds the data to the people array.
        const unsubscribe=database.collection('people').onSnapshot(snapshot=>{
            setPeople(snapshot.docs.map(doc=>doc.data()));
        });
        return ()=>{
            //this is the cleanup function, to unsubscribe the listeners
            unsubscribe();
        }


    //this will run once when the component loads and never again
    }, [])
    return(
        <div>
           
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(     /*loop through the people array and for every person in the array do the following*/
                <TinderCard className="swipe" 
                key={person.name} 
                preventSwipe={['up','down']}  
                >  {/*always use a unique identifier which allows you React to re-render the list*/}
                
                    <div style={{backgroundImage:`url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default TinderCards;


