import { useEffect, useState } from "react"

export default function Users(){
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response=> response.json())
        .then(data=>setUser(data));  
    },[])
    return(
        <div className="">
            <h3>
                Users: {user.length}
            </h3>
        </div>
    )
}
/*
1. declare a state to hold the data
*/