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

