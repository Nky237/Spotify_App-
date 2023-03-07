import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Root from '../RooLayout/Root.module.css'
import { AiOutlineFund,AiOutlineHome, AiTwotoneHome, AiOutlineMenuUnfold,
    AiOutlineCompass, AiOutlineAppstore, AiOutlineHeart
} from "react-icons/ai";
import { SlCalender, SlSocialSpotify } from "react-icons/sl"
import { MdPeopleOutline } from "react-icons/md"
import { BsBlockquoteRight } from "react-icons/bs"
import { FaGreaterThan } from "react-icons/fa"
import { MdOutlineConfirmationNumber } from "react-icons/md"
import female from '../../assets/femaleProfile.jpg'

const RootLayout = () => {
    const [toggle, setToggle] = useState(false)
    const Open = ()=>{
        setToggle(!toggle)
    }
 
  return (
    <div className={Root.rootlayout}>
      <div className={Root.container} style={{width: toggle ? '100px': '300px' }}>
     <div className={Root.wrapper}>
     <nav>
            <div className={Root.ham} style={{flexDirection: toggle ? 'column': 'row'}}>
                <div className="harmburger">
                    <BsBlockquoteRight fontSize={'25'} onClick={Open} />
                </div>
            </div>
            <div className={Root.logo} >
                <SlSocialSpotify fontSize={'35'} />
                <h1 style={{display: toggle ? 'none': 'block'}}>SPOTIFY</h1>
            </div>
            <ul>
                    
                <div>
                <NavLink to ='/'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                <NavLink to='/'>  
                    <AiTwotoneHome fontSize={'20'} />
                    <li style={{display: toggle ? 'none': 'block'}}>Home</li>
                    </NavLink>   
                </NavLink> 
                <NavLink to='trend'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >              
                 <NavLink to='trend'>
                    <AiOutlineFund fontSize={'20'}/>
                    <li style={{display: toggle ? 'none': 'block'}}>Trends</li>
                </NavLink>       
                </NavLink>       
                <NavLink to ='feed'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                <NavLink to='feed'>
                         <AiOutlineCompass fontSize={'20'}/>
                    <li style={{display: toggle ? 'none': 'block'}}>Feed</li>
                </NavLink>
                </NavLink>
                </div>
                <main className={Root.discover}>
                    <p style={{display: toggle ? 'none': 'block'}}>Discover</p>
                    <NavLink to ='new'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                    <NavLink to='new'>
                         <AiOutlineAppstore fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>New and Notable</li>
                    </NavLink>
                 </NavLink>
                       <NavLink to ='release'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                    <NavLink to='release'>
                         <SlCalender fontSize={'16'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Release and Calender</li>
                    </NavLink>
                    </NavLink>
                <NavLink to ='event'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                    <NavLink to='event'>
                         <MdOutlineConfirmationNumber fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Events</li>
                    </NavLink>
                    </NavLink>
                    
                </main>
                <main className={Root.discover}>
                    <p style={{display: toggle ? 'none': 'block'}}>Your Collection</p>
                    <NavLink to ='fav'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                    <NavLink to='fav'>
                        <AiOutlineHeart fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Favourite Songs</li>
                    </NavLink>
                 </NavLink>
                    <NavLink to ='artist'
                style={{backgroundColor:'white', width:'100%',
                borderRadius:'0px', padding: '0'
                }} 
                >
                    <NavLink to='artist'>
                        <MdPeopleOutline fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Artist</li>
                    </NavLink>
                    </NavLink>
                    
                </main>
            </ul>
        </nav>
        <div className={Root.profile}>
                <div style={{display: 'flex', alignItems:'center', gap:'20px'}}>
                    <img src={female} alt="" />
                    <h3>Kelvin Hart</h3>
                </div>
                <FaGreaterThan />


        </div>
     </div>
      </div>
        

        <section>
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout