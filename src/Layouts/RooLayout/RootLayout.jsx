import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Root from '../RooLayout/Root.module.css'
import { AiOutlineHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const RootLayout = () => {
    const [toggle, setToggle] = useState(false)
    const Open = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className={Root.rootlayout}>
        <nav style={{width: toggle ? '70px': '300px' }}>
            <div className="logo">SPOTIFY</div>
            <div>
                <div className="harmburger">
                    <GiHamburgerMenu onClick={Open} />
                </div>
            </div>
            <ul>
                    
                <NavLink to='/'>  
                    <AiOutlineHome />
                    <li style={{display: toggle ? 'none': 'block'}}>Home</li>
                </NavLink>               
                 <NavLink to='trend'>
                    <AiOutlineHome />
                    <li style={{display: toggle ? 'none': 'block'}}>Trends</li>
                </NavLink>       
                <NavLink to='feed'>
                         <AiOutlineHome />
                    <li style={{display: toggle ? 'none': 'block'}}>Feed</li>
                </NavLink>
                <main className={Root.discover}>
                    <p style={{display: toggle ? 'none': 'block'}}>Discover</p>
                    <NavLink to='new'>
                         <AiOutlineHome />
                        <li style={{display: toggle ? 'none': 'block'}}>New and Notable</li>
                    </NavLink>
                    <NavLink to='release'>
                         <AiOutlineHome />
                        <li style={{display: toggle ? 'none': 'block'}}>Release and Calender</li>
                    </NavLink>
        
                    <NavLink to='event'>
                         <AiOutlineHome />
                        <li style={{display: toggle ? 'none': 'block'}}>Events</li>
                    </NavLink>
                    
                </main>
                <main className={Root.discover}>
                    <p style={{display: toggle ? 'none': 'block'}}>Your Collection</p>

                    <NavLink to='fav'>
                        <AiOutlineHome />
                        <li style={{display: toggle ? 'none': 'block'}}>Favourite Songs</li>
                    </NavLink>
                    
                    
                    <NavLink to='artist'>
                        <AiOutlineHome />
                        <li style={{display: toggle ? 'none': 'block'}}>Artist</li>
                    </NavLink>
                    
                </main>
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout