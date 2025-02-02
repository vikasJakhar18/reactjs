//App.Jsx
import UserCards from "./components/userCards"
import "./App.css"
import virat from "./assets/virat.webp"
import rohit from "./assets/rohit.webp"
import dhoni from "./assets/dhoni.webp"



function App() {

  return (
   <div className="container">
    <UserCards name='Virat Kohli' team='Royal Challengers Bangluru' image={virat}  />
    <UserCards name='Rohit Sharma' team='Mumbai Indians'  image={rohit}  />
    <UserCards name='Ms Dhoni' team='Chennai Super Kings'  image={dhoni}   />
   </div>
  )
}

export default App

//index.css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}

body{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: cadetblue;
}

//COMPONENTS.........................................................................
//UserCard.jsx
import React from 'react'
import './UserCards.css'


const UserCards = (props) => {
  return (
    <div className='user-container'>
      <h3>{props.name}</h3>
      <img className='user-image' src={props.image} alt="vk" />
      <p>{props.team}</p>
    </div>
  )
}

export default UserCards

//UserCard.css
.user-container{
      height: 300px;
      background-color: cornsilk;
      padding: 20px;
      border-radius: 10px;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      
}

.user-image{
    height: 60%;
    width: 60%;
    border-radius: 50%;
    
}

