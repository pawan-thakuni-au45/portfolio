import React from 'react'

import Project from './Project'

const Header = () => {
   
  return (
    <div className='flex '>
    
    <div>
    <img  className="ml-[150px] md:ml-[710px] rounded-full mt-20 border border-green-800 w-20" alt="logo" src="https://lh3.googleusercontent.com/ogw/AF2bZyjzCeh-fJvxvKaCgkPUI6Sk16Kf6ds2r_fRRobFNRTBpg=s32-c-mo"></img>
   
    <ul className='m-2 shadow-lg '>
      <li className='font-bold p-3  my-0 text-xl'>Pawan Thakuni</li>
      <li className=' my-0 font-serif '>Frontend Developer</li>
      
    <div className='flex justify-center my-6 '>
     
      <a href="https://www.linkedin.com/in/pawan-thakuni-390a2324b/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"> 
      <img  className="h-7 w-7 mr-8" alt='lidin' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"/></a>
  
      <a href="https://github.com/pawan-thakuni-au45" target="_blank" rel="noopener noreferrer"> 
      <img  className="h-7 w-7 " alt='lidin' src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/></a>


         
      <a href="mailto:thakunipawan@gmail.com" target="_blank" rel="noopener noreferrer"> 
      <img  className="h-7 w-7 ml-7" alt='lidin' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"/></a>

      
      <a href="tel:+91 8279831158" target="_blank" rel="noopener noreferrer"> 
      <img  className="h-7 w-7 ml-7" alt='lidin' src="https://cdn-icons-png.freepik.com/256/2354/2354127.png?uid=R145302671&semt=ais_hybrid"/></a>
      </div>
  </ul>
        <Project/>

        </div>

        
    </div>
  )
}

export default Header


