import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('Button clicked');
  }
  const handleClick2=()=>{
    confirm('Are you click me?')
  }
  const addToFive=()=>{
    const num=prompt('enter number');
    confirm(num);
  }
  function addThree(num){
    num+=3;
    alert(num);
  }
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <h1>React Core Concept 2.0</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={addToFive}>third</button>
      <Counter></Counter>
      {/* vejailla */}
      <button onClick={()=>addThree(2)}>four</button>
    </>
  )
}

export default App
