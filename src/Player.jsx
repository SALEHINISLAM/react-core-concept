import { useState } from "react";

export default function Player(){
    const [count,setCount]=useState(0);
    const [ball,countBall]=useState(0);
    function handleAdd(num){
        const newCount=count+num;
        const newBall=ball+1;
        setCount(newCount);
        countBall(newBall);
    }
    const playerStyle={
        border:'2px solid purple',
        padding:'1rem',
        borderRadius:'1rem'
    }
    const rr=(count/ball).toFixed(2);
    return(
        <div style={playerStyle}>
            <h4>Ball: {ball}</h4>
            <h3>Run: {count}</h3>
            <h5>Run Rate: {rr}</h5>
            <button onClick={()=>handleAdd(0)}>No Run</button>
            <button onClick={()=>handleAdd(1)}>1</button>
            <button onClick={()=>handleAdd(2)}>2</button>
            <button onClick={()=>handleAdd(4)}>4</button>
            <button onClick={()=>handleAdd(6)}>6</button>
        </div>
    )
}