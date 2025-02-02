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

