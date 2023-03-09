import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'

const Arty = ({img, para, head}) => {
  return (
    <div>
        <div className="art" style={{display: 'flex', justifyContent:'space-between',
         paddingTop: '20px', alignItems:'center'}}>
            <div style={{display:'flex', gap:"13px", alignItems:'center'}}>
                <img src={img} alt="image" style={{height: '40px', width:'40px',
                borderRadius:'50%' ,
                objectFit: 'cover'
                }}/>
                <span>
                    <h4 style={{fontSize: '14px'}}>{head}</h4>
                    <p  style={{fontSize: '12px', marginTop:'4px'}}>{para}</p>
                </span>
            </div>
            <BiDotsHorizontal color='black' fontWeight={'900'} />
        </div>
    </div>
  )
}

export default Arty