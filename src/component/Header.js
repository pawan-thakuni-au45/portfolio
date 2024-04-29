import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
   
  return (
    <div>
    
    
    <img  className="ml-[750px] rounded-full mt-20 border border-green-800 w-20" alt="logo" src="https://lh3.googleusercontent.com/ogw/AF2bZyjzCeh-fJvxvKaCgkPUI6Sk16Kf6ds2r_fRRobFNRTBpg=s32-c-mo"></img>
   
    <ul className='m-2'>
      <li className='text-bold p-3 ml-6 h-20 '>Pawan Thakuni</li>
      <li className='ml-10 mt-1'>Frontend Developer</li>
      
    
     
      <a href="https://www.linkedin.com/in/pawan-thakuni-390a2324b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"> 
      <img  className="h-7 w-7 ml-96" alt='lidin' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"/>Visit LinkedIn</a>
     
  </ul>

   
    </div>
  )
}

export default Header


