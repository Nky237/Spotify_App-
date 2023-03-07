import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { TbMathGreater } from 'react-icons/tb'
import { FcDoughnutChart } from 'react-icons/fc'
import { GiPreviousButton, GiNextButton } from 'react-icons/gi'
import { BsQuote, BsFillPauseCircleFill } from 'react-icons/bs'
import man1 from '../assets/man1.jfif'
import man2 from '../assets/man2.jfif'
import woman1 from '../assets/woman1.jfif'
import woman2 from '../assets/woman2.jfif'
import fire from '../assets/fire.png'
import { data } from '../Data'
import ShortButton from '../Components/ShortButton'
import Arty from '../Components/Arty'

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
                <span style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <p>more</p>
                <TbMathGreater />
                </span>
                </div>
                <div className="bg">
                  <div className="text">
                    <p>Artists</p>
                    <h1>On Top <br></br>Of The World</h1>
                    <div className="btn">
                      <button>PLAY</button>
                      <button>FOLLOW</button>
                    </div>
                  </div>
                </div>
            </div>
            {/* PLAYLIST SECTION */}
            <div className="playlist">
              <h1>My Playlist</h1>
              <div>
              <table>
                <tr>
                  <th><BsQuote /></th>
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
                <ShortButton text={'Chill Hits'} icon ={<FcDoughnutChart />} />
                <ShortButton text={'Hop'} />
                <ShortButton text={'Accoustic'} />
                <ShortButton text={'India Pop'} />
                <ShortButton text={'Piano Blues'} />
                <ShortButton text={'Jazz'} />
            </div>
            <div className="fav">
              <div className='favIn'>
              <h2>Fav Artist</h2>
                <Arty head={'Taylor Swift'} para={'190 songs in library'} img={woman1} />
                <Arty head={'Kanye West'} para={'124 songs in library'} img={man2} />
                <Arty head={'Drake'} para={'90 songs in library'} img={man1}/>
                <Arty head={'Billie Eillish'} para={'15 songs in library'} img={woman2}/>

               <div className="card">
               <figure className='fav-img'>
                  <img src={woman2}/>
                </figure>
                <div style={{display: 'flex', justifyContent:'space-between', paddingRight:'20px'}}>
                  <span>
                  <h4>Localoca</h4>
                  <p>Shakira</p>
                  </span>
                  <AiOutlinePlusSquare fontSize={'25'} fontWeight={'500'}/>
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