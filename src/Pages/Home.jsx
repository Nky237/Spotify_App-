import React, { useContext, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { FcDoughnutChart } from 'react-icons/fc'
import { CgPiano } from 'react-icons/cg'
import { MdFormatQuote, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { GiStarShuriken, GiGuitar, GiTrumpet } from 'react-icons/gi'
import {BsMusicNoteBeamed, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import fire from '../assets/fire.png'
import ShortButton from '../Components/ShortButton'
import Arty from '../Components/Arty'
import { useNavigate } from 'react-router-dom'
import { UserState } from '../context'
import { getRandomSearch, millisToMinutesAndSeconds } from '../factoryFunctions'
import ReactAudioPlayer from 'react-audio-player'


export const SPOTIFY_BASE_URL= import.meta.env
	.VITE_VERCEL_SPOTIFY_BASE_URL;

const Home = () => {
	const { userDetails, setUserDetails } = useContext(UserState);
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null)

  const navigate = useNavigate();
	const token = localStorage.getItem("tkn");

	const handleLogout = () => {
		localStorage.clear();
		navigate("/");
	};

	useEffect(() => {
		if (!token) {
			navigate("/");
		}
	}, []);

  // user details
	useEffect(() => {
		fetch(`${SPOTIFY_BASE_URL}/me`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response?.status === 401) {
					return handleLogout();
				}
				return response.json();
			})
			.then((data) => setUserDetails(data))
			.catch(() => {
				handleLogout();
			});
	}, []);

  // artists detail
	useEffect(() => {
		fetch(`${SPOTIFY_BASE_URL}/me/following?type=artist&limit=4`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response?.status === 401) {
					return handleLogout();
				}
				return response.json();
			})
			.then((data) => setUserDetails((details)=>({...details, artistsDetails:data})))
			.catch(() => {
				handleLogout();
			});
	}, []);

  // tracks detail
	useEffect(() => {
		fetch(`${SPOTIFY_BASE_URL}/search?type=track&q=${encodeURIComponent(getRandomSearch())}&limit=5`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => {
				if (response?.status === 401) {
					return handleLogout();
				}
				return response.json();
			})
			.then((data) => setTracks(data))
			.catch(() => {
				handleLogout();
			});
	}, []);


  return (
    <div className='main-body'>
        <section className='main'>
          <div className="cont">
          <div className="search">
          <div className="ico" style={{display: 'flex', gap:'20px'}}>
                <BsArrowLeftShort fontSize={'27px'} color={'#483958'} />
                <BsArrowRightShort fontSize={'27px'} color={'#483958'} />
          </div>
                <input type="text" placeholder='search for artists, songs and ...'/>
                <FiSearch className='searchIcon' />
            </div>

            {/* HEADER SECTION */}
            <div className="header">
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <small>what's hot</small>
                  <img src={fire} alt="fire" className='fire' />
                </div>
                <div className='trend'>
                <h1>Trending</h1>
                <span style={{display: 'flex', alignItems: 'center', gap: '6px',
              color: '#B2B2B6', fontSize:'14px'
              }}>
                <p>More</p>
                <MdOutlineKeyboardArrowRight  fontSize={'21'}/>
                </span>
                </div>
                <div className="bg">
                  <div className="text">
                    <p>Artist</p>
                    <h1>On Top <br></br>Of The World</h1>
                    <div className='bgo'>
                    <div className="btn" style={{marginTop:'15px'}}>
                      <button className='bg-btn'>PLAY</button>
                      <button className='btn2'>FOLLOW</button>
                    </div>
                    <span style={{color:'white'}}>
                        <p>Monthly Listeners</p>
                        <h5>32,092</h5>
                    </span>
                    </div>
                  </div>
                </div>
            </div>
            {/* PLAYLIST SECTION */}
            <div className="playlist">
              <span style={{display:'flex', justifyContent:'space-between'}}>
              <h1>My Playlist</h1>
              <p style={{fontSize: '13px', fontWeight: '600', paddingTop: '10px',
            color:"#89898A"
            }}>Show All</p>
              </span>
              <div>
              <table>
                <tr>
                  <th><MdFormatQuote /></th>
                  <th>TITLE</th>
                  <th>ARTIST</th>
                  <th>TIME</th>
                  <th>ALBUM</th>
                </tr>
                  {
                    tracks?.tracks?.items.length > 0 ? 
                    tracks?.tracks?.items.map((item,index)=> {
                      return <tr key={index} onClick={()=>setCurrentTrack(item)}>
                        <td>{index + 1}</td>
                        <td>{item?.name}</td>
                        <td>{item?.artists?.[0]?.name}</td>
                        <td>{millisToMinutesAndSeconds(item?.duration_ms)}</td>
                        <td>{item?.album?.name}</td>
                      </tr>
                    }
                    ) : 
                    <tr >
                      <td></td>
                      <td></td>
                      <td style={{fontSize:"14px", fontWeight:"500"}}>No tracks to display 😢</td>
                      <td></td>
                      <td></td>
                    </tr>
                  }
             </table>
              </div>
            </div>

            {/* PLAY */}
              <div className='play'>
                <ReactAudioPlayer
                  src={currentTrack?.preview_url}
                  autoPlay
                  controls
                />
            </div>
            {/* <div className="play">
              <GiPreviousButton fontSize={'30'} />
               <BsFillPauseCircleFill fontSize={'30'} /> 
               <GiNextButton fontSize={'30'} />  
            </div> */}
          </div>
        </section>
        <section className='Nav'>
          <div className="inner-nav">
            <h1>Shortcuts</h1>
            <div className="navflex" style={{display: 'flex',flexWrap:'wrap' , gap: '10px',
          paddingTop: '10px'
          }}>
                <ShortButton text={'Chill Hits'} icon ={<FcDoughnutChart  />} />
                <ShortButton text={'Hop'} icon={<GiStarShuriken style={{fill:'yellow'}} />} />
                <ShortButton text={'Accoustic'} icon={<GiGuitar fill='#DF5F5D' />}/>
                <ShortButton text={'India Pop'} icon ={<BsMusicNoteBeamed  />} />
                <ShortButton text={'Piano Blues'} icon ={<CgPiano  />}/>
                <ShortButton text={'Jazz'} icon ={<GiTrumpet fill='#CBAD47'  />}/>
            </div>
            <div className="fav">
              <div className='favIn'>
              <h2 style={{fontSize:'19px'}}>Fav Artist</h2>
              {userDetails?.artistsDetails?.artists?.items?.length > 0 ? 
              userDetails?.artistsDetails?.artists?.items?.map((item, index)=>
                   { return <span key={index}>
                       <Arty head={item?.name} 
                                  para={`Followers: ${item?.followers?.total?.toLocaleString("en-US")}`} 
                                  img={item?.images?.[0]?.url} />
                 </span>}
              )
              :<span style={{fontSize:"12px", fontWeight:"500"}}>Favorite Artist List Empty 😢</span>}
               <div className="card">
               <figure className='fav-img' style={{marginBottom:"10px"}}>
                  <img  src= {currentTrack?.album?.images?.[0]?.url}/>
                </figure>
                <div style={{display: 'flex', justifyContent:'space-between',  alignItems:"center",
                paddingRight:'20px', paddingTop:'60px',  paddingBottom:'20px', fontSize:"14px"}}>
                  <span>
                  <h4 style={{margin:"8px 0px"}}>{currentTrack?.name}</h4>
                  <p>{currentTrack?.artists?.[0]?.name}</p>
                  </span>
                  <AiOutlinePlusSquare fontSize={'25'} fontWeight={'900'} color="#4F4F50" />
                </div>

               </div>
              </div>

            </div>
          </div>
        </section>
    </div>
  )
}

export default Home