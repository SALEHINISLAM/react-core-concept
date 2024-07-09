import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './Friend';
export default function Friends(){
    const [users, setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[]);
    return(
        <div className="box">
            <h3>Friends: {users.length}</h3>

            {
                users.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}
/*
useState
useEffect

*/