import React from 'react'


const Skills = () => {
  return (
    <div className='shadow-2xl hover:bg-red-200 hover:rounded-3xl'>
     <h className="font-bold text-red-800 "> Skills</h>
      <ul className='font-bold'>Languages:</ul>
      <ul>
        <li className='md:ml-[200px]'>JavaScript | c++</li>
        </ul>
        <h className="font-bold">FrameWorks:</h> 
         <ul>
           <li className='md:ml-[280px]'>React js | Redux js | Express js | Node js | Tailwindcss</li>
         </ul>  
         <h className="font-bold">Tools:</h>
         <ul>
          <li className='md:ml-[180px]'>Git | PostMan | Vs Code</li>
         </ul>   
         <h className="font-bold ">Database:</h>
         <ul>
          <li className='md:ml-[180px]'>NO-SQL</li>
         </ul>
         
    </div>
  )
}

export default Skills

