import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
<ExternelUser></ExternelUser>

    
  )
}

function ExternelUser(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h2>Hello Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name ={user.name} email={user.email} ></User>)
      }
    </div>
  )
}


function User (props){
  return(
    <div style={{border : "10px solid red", margin:"10px", borderRadius:"20px"}}>
      <h1>Name : {props.name}</h1>
      <p>Email : {props.email}</p>
      
    </div>
  )
}

export default App
