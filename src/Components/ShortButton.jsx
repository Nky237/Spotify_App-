import React from 'react'

const ShortButton = ({icon, text}) => {
  return (
    <div>
       <div style={{display: 'flex', backgroundColor:'white',
        height:'50px', borderRadius:'35px', padding:'10px 15px', alignItems:'center'
    
    }}>
            <p>{icon}</p>
            <p>{text}</p>
        </div> 
    </div>
  )
}

export default ShortButton