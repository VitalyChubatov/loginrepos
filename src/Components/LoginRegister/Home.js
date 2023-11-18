import { signOut } from 'firebase/auth'
import React from 'react'
import { database } from '../config.js'
import { useNavigate } from 'react-router-dom'

export default function Home () {
    const history = useNavigate()

    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div className='homepage'>
            <h1>Home</h1>
            <button onClick={handleClick}>Выйти</button>
        </div>
    )
}