import React from 'react'
import { Link } from 'react-router-dom';

function Mydeta({propsimage, propsname}) {
  return (
    <Link to='/Profile'>
                <span class="profile_img empty"><img src={propsimage} alt={propsname} /></span>
                <span class="Profile_name">{propsname}</span>         
    </Link>
  )
}

export default Mydeta