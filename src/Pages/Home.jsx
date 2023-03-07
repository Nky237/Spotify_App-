import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { TbMathGreater } from 'react-icons/tb'
import { BsQuote } from 'react-icons/bs'
import fire from '../assets/fire.png'
import { data } from '../Data'

const Home = () => {
  return (
    <div>
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
                  
            </div>
          </div>
        </section>
        <section className='Nav'></section>
    </div>
  )
}

export default Home