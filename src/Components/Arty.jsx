import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'

const Arty = ({img, para, head}) => {
  return (
    <div>
        <div className="art" style={{display: 'flex', justifyContent:'space-between',
         paddingTop: '20px', alignItems:'center'}}>
            <div style={{display:'flex', gap:"13px", alignItems:'center'}}>
                <img src={img} alt="image" style={{height: '40px', width:'40px',
                borderRadius:'50%' }}/>
                <span>
                    <h4>{head}</h4>
                    <p>{para}</p>
                </span>
            </div>
            <BiDotsHorizontal />
        </div>
    </div>
  )
}

export default Arty