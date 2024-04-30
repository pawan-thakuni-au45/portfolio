import React from 'react'
import Skills from './Skills'

const Project = () => {
  return (
    
     <div className=''>
     <h1 className='font-bold'>Projects </h1>
     <div className='flex  flex-col md:flex-row my-6 justify-between '>
       <div className='flex flex-col ml-[8px] bg-green-200 shadow-3xl hover:bg-gray-200 hover:rounded-3xl'>
       
        <h1 className="font-bold">Netflix-GPT</h1>

       
          <a className="text-blue-600  " href="https://fun-gpt.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
          <a className="text-blue-600  " href="https://github.com/pawan-thakuni-au45/netflixgpt" target="_blank" rel="noopener noreferrer">GitHub Link</a>

          <li className='text-red-900'>A netflix clone powered by GPT</li>
          <ul className='font-bold'>Features</ul>
            <li>Netflix-inspired UI with dynamic movie categories. </li>
            <li>Detailed movie information from TMDB API.</li>
            <li>Personalized movie recommendations powered by GPT. </li>
            <li>eamless navigation with React and React Router.</li>
            <li>Authentication using Firebase. </li>
            <li>Stylish design using Tailwind CSS.</li>
            
          
          <ul className='font-bold'>Tech Stack</ul>
             <li>React | React Router | Tailwind CSS | Node.js | Firebase | GPT API | TMDB API</li>
          
         </div>

         <div className='flex flex-col ml-[8px] shadow-2xl bg-green-200 md:shadow-2xl hover:bg-gray-200 hover:rounded-3xl'>
       
         <h1 className="font-bold">YouTube-Clone</h1>
 
        
           <a className="text-blue-600" href="https://justwatchnow.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
          <a className="text-blue-600  " href="https://github.com/pawan-thakuni-au45/youclone" target="_blank" rel="noopener noreferrer">GitHub Link</a>

          
           <ul className='font-bold'>Features</ul>
           
             <li>Optimized Video Searching using Debouncing Technique . </li>
             <li>Flexible Sidebar.</li>
             <li>FLive chat box which shows dummy chats and also gives ability to input messages including Dummy comments and nested comments display. </li>
             <li>Using YouTube's video suggestions API for fetching videos list.</li>
             <li>Using Google's live keyword suggestion API and caching the results with redux if the user makes same Keyword search for the same session. </li>
             <li>Stylish design using Tailwind CSS.</li>
             
             
           <ul className='font-bold'>Tech Stack</ul>
              <li>React|React Router Dom | React Redux |Redux Toolkit |Tailwind CSS | Vite for bundling</li>
          
          </div>

          <div className='flex flex-col ml-[8px] bg-green-200 shadow-2xl hover:bg-gray-200 hover:rounded-3xl'>
         <h1 className="font-bold">FoodGrab</h1>
 
        
         <a className='text-blue-600' href="https://fun-gpt.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
         <a className="text-blue-600  " href="https://github.com/pawan-thakuni-au45/foodorderapp" target="_blank" rel="noopener noreferrer">GitHub Link</a>

        
         <ul className='font-bold'>Features</ul>
         <li>A dynamic food delivery app leveraging Swiggy's Live API</li>
           <li>Real-Time Menu Updates. </li>
           <li>Super Fast Loading with Lazy Loading and Chunking.</li>
           <li>Smart Search & Filters for easy discovery. </li>
           <li> User-Friendly Navigation.</li>
           <li>Fully Responsive Design. </li>
           <li>Stylish design using Tailwind CSS.</li>
           
       
         <ul className='font-bold'>Tech Stack</ul>
            <li>React | React Router | Tailwind CSS | Node.js | Firebase | GPT API | TMDB API</li>
        
         </div>

        

        
         </div >
         <div className='shadow-2xl bg-green-200'>
         <Skills/>
         </div>


          </div>
  )
}

export default Project