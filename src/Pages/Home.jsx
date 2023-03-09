import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { TbMathGreater } from 'react-icons/tb'
import { FcDoughnutChart } from 'react-icons/fc'
import { CgPiano } from 'react-icons/cg'
import { MdFormatQuote } from 'react-icons/md'
import { GiPreviousButton, GiNextButton, GiStarShuriken, GiGuitar, GiTrumpet } from 'react-icons/gi'
import { BsQuote, BsFillPauseCircleFill, BsMusicNoteBeamed } from 'react-icons/bs'
import man1 from '../assets/man1.jfif'
import man2 from '../assets/man2.jfif'
import woman1 from '../assets/woman1.jfif'
import woman2 from '../assets/woman2.jfif'
import fire from '../assets/fire.png'
import one from '../assets/one.jpg'
import { data } from '../Data'
import ShortButton from '../Components/ShortButton'
import Arty from '../Components/Arty'
import { FaGreaterThan } from "react-icons/fa"

const Home = () => {
  return (
    <div className='main-body'>
        <section className='main'>
          <div className="cont">
          <div className="search">
                <HiArrowNarrowLeft />
                <HiArrowNarrowRight />
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
                <span style={{display: 'flex', alignItems: 'center', gap: '13px',
              color: '#BABBC2;', fontSize:'14px'
              }}>
                <p>More</p>
                <FaGreaterThan fill='#BABBC2;' fontSize={'11'}/>
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
                    data.map(item => (
                          <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.Artist}</td>
                          <td>{item.time}</td>
                          <td>{item.Album}</td>
                          </tr>
                    ))
                  }
             </table>
              </div>
            </div>

            {/* PLAY */}
            <div className="play">
              <GiPreviousButton fontSize={'30'} />
               <BsFillPauseCircleFill fontSize={'30'} /> 
               <GiNextButton fontSize={'30'} />  
            </div>
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
                <Arty head={'Taylor Swift'} para={'190 songs in library'} img={woman1} />
                <Arty head={'Kanye West'} para={'124 songs in library'} img={man2} />
                <Arty head={'Drake'} para={'90 songs in library'} img={man1}/>
                <Arty head={'Billie Eillish'} para={'15 songs in library'} img={woman2}/>

               <div className="card">
               <figure className='fav-img'>
                  <img src= {one}/>
                </figure>
                <div style={{display: 'flex', justifyContent:'space-between', 
                paddingRight:'20px', paddingTop:'60px'}}>
                  <span>
                  <h4>Localoca</h4>
                  <p>Shakira</p>
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