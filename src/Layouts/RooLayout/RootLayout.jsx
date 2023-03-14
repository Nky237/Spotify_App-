import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Root from '../RooLayout/Root.module.css'
import { AiOutlineFund,AiOutlineHome, AiTwotoneHome, AiOutlineMenuUnfold,
    AiOutlineCompass, AiOutlineAppstore, AiOutlineHeart
} from "react-icons/ai";
import { SlCalender, SlSocialSpotify } from "react-icons/sl"
import { MdPeopleOutline } from "react-icons/md"
import { BsBlockquoteRight } from "react-icons/bs"
import { MdOutlineConfirmationNumber, MdOutlineKeyboardArrowRight } from "react-icons/md"
import { UserState } from '../../context';

const RootLayout = () => {
    const [toggle, setToggle] = useState(false)
	const {userDetails} = useContext(UserState);
    const navigate = useNavigate();

    const Open = ()=>{
        setToggle(!toggle)
    }

    const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};


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
                <NavLink to ='home'>
                    <AiTwotoneHome fontSize={'20'} />
                    <li style={{display: toggle ? 'none': 'block'}}>Home</li>
                </NavLink> 
                <NavLink to='trend'>              
                    <AiOutlineFund fontSize={'20'}/>
                    <li style={{display: toggle ? 'none': 'block'}}>Trends</li>
                </NavLink>       
                <NavLink to ='feed'>
                         <AiOutlineCompass fontSize={'20'}/>
                    <li style={{display: toggle ? 'none': 'block'}}>Feed</li>
                </NavLink>
                </div>
                <main className={Root.discover}>
                    <p style={{display: toggle ? 'none': 'block'}}>Discover</p>
                    <NavLink to ='new'>
                         <AiOutlineAppstore fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>New and Notable</li>
                 </NavLink>
                       <NavLink to ='release'>
                         <SlCalender fontSize={'16'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Release and Calender</li>
                    </NavLink>
                <NavLink to ='event' >
                         <MdOutlineConfirmationNumber fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Events</li>
                    </NavLink>
                </main>
                <main className={Root.discover}>
                    <p style={{display: toggle ? 'none': 'block'}}>Your Collection</p>
                    <NavLink to ='fav'>
                        <AiOutlineHeart fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Favourite Songs</li>
                 </NavLink>
                    <NavLink to ='artist' >
                        <MdPeopleOutline fontSize={'20'}/>
                        <li style={{display: toggle ? 'none': 'block'}}>Artist</li>
                    </NavLink>
                    <button className={Root.logout} onClick={handleLogout}>Logout</button>
                </main>
            </ul>
        </nav>
        <div className={Root.profile}>
                <div style={{display: 'flex', alignItems:'center', gap:'20px'}}>
                    <img src={userDetails?.images?.[0]?.url} alt="" />
                    <h3>{userDetails?.display_name}</h3>
                </div>
                <MdOutlineKeyboardArrowRight fontSize={'23px'} />
        </div>
     </div>
      </div>
        <section >
            <Outlet />
        </section>
    </div>
  )
}

export default RootLayout