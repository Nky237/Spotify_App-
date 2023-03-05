import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Root from '../RooLayout/Root.module.css'
import { AiOutlineHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const RootLayout = () => {
    const [toggle, setToggle] = useState(false)
    const Open = ()=>{
        setToggle(!toggle)
    }
    const [color, setColor] = useState('#F4F5FE')
    const BgColor = (color)=>{
      setColor(color)
    }
    useEffect(()=>{
        document.body.style.backgroundColor = color
    }, [color])
  return (
    <div className={Root.rootlayout}>
        <nav style={{width: toggle ? '70px': '300px' }}>
            <div className={Root.ham}>
                <div className={Root.color}>
                    <span className={Root.one} onClick={()=>{BgColor('red')}}></span>
                    <span className={Root.two} onClick={()=>{BgColor('yellow')}}></span>
                    <span className={Root.three} onClick={()=>{BgColor('green')}}></span>
                </div>
                <div className="harmburger">
                    <GiHamburgerMenu onClick={Open} />
                </div>
            </div>
            <div className="logo">SPOTIFY</div>
            <ul>
                    
                <div>
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
                </div>
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
        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout