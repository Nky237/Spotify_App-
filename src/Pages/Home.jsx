import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'

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
          </div>
        </section>
        <section className='Nav'></section>
    </div>
  )
}

export default Home