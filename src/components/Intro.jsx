import React from 'react';

function Intro() {

   return (
      <div className="flex items-center justify-center md:flex-row text-center md:text-left md:space-y-0 space-y-4 flex-col md:space-x-4">
         <img src="./MyHeadshot.jpg" alt="Picture of Giridhar Nair" width={200} className='rounded-lg'/>
         <div className='dark:text-stone-400 text-stone-500 md:w-5/12 mx-5 space-y-2'>
            <h1 className="text-stone-900 text-4xl dark:text-white mb-2 font-bold">Giridhar Nair</h1>
            <p className="text-base md:text-l mb-2 font-medium">The University Of Texas at Dallas '27</p>
            <p className='md:text-left text-center'>
               A passionate and tenacious developer with a love for coding and a drive 
               to build innovative projects, I am constantly seeking new challenges 
               and opportunities to expand my skills.
            </p>
         </div>
      </div>
   )
}

export default Intro;