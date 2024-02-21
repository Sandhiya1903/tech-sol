import React from 'react'
import './TeamMembers.css'

function TeamMembers({name,role,img}) {
  return (
    <div className='members'>
        <div className='mem'>
         <img src={img}/>
          <h3>{name}<br></br>{role}</h3>
        </div>
      
    </div>
  )
}

export default TeamMembers
