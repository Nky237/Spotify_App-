import React from 'react'
import { NavLink } from 'react-router-dom'
import Sporty from '../assets/Sporty.png'

const Land = () => {
  return (
    <div className='Land' >
        <img src={Sporty} alt="logo"  style={{height:'200px'}}/>
        <NavLink to='root'
        style={{background:"black", color:"white", width:'300px', borderRadius: '25px',
    height:'60px', textDecoration:'none', textAlign:'center', fontSize:'20px', 
    
    }}
        >Connect to spotify</NavLink>
    </div>
  )
}

export default Land