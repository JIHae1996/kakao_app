import React from 'react'
import { Link } from 'react-router-dom';

function Lists({propsimage, propsname, propstitle}) {
  return (
 
        <Link to='/Profile'>
        <span class="profile_img empty"><img src={propsimage} alt={propsname} /></span>
        <span class="Profile_name">{propsname}</span>
        <span class="profile_massages">{propstitle}</span>
        </Link>
    
  )
}

export default Lists