import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { languages, frameworks_and_libraries, devTools } from '../data/skills';

function Intro() {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
     setIsActive(true);
   }, []);

   const renderSkills = (skillsArray, title) => (
      <div className="flex items-center justify-center flex-col text-center mb-6">
         <h1 className='text-stone-900 text-3xl dark:text-white mb-4 font-semibold'>{title}</h1>
         <div className='grid md:grid-cols-5 grid-cols-2 gap-x-3'>
            {skillsArray.map(item => (
               <span className='w-32 my-2 nline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md' key={item.id}>
                  {item.name}
               </span>
            ))}
         </div>
      </div>
   );
   

   return (
      <div className={`fade-in ${isActive ? 'active' : ''}`}>
         <div className="pt-8 pb-4 flex items-center justify-center md:flex-row text-center md:text-left md:space-y-0 space-y-4 flex-col md:space-x-4">
            <img src="./MyHeadshot.jpg" alt="Picture of Giridhar Nair" width={200} className='rounded-lg'/>
            <div className='dark:text-stone-400 text-stone-500 md:w-5/12 mx-5 space-y-2'>
               <h1 className="text-stone-900 text-4xl dark:text-white mb-2 font-bold">Giridhar Nair</h1>
               <p className="text-base md:text-l mb-2 font-medium">The University Of Texas at Dallas '27</p>
               <p className='md:text-left text-center'>
                  I have a love for coding and a drive to build innovative projects. 
                  I am constantly seeking new challenges and opportunities to expand my skills, particularly through internships.
               </p>
            </div>
         </div>
         {renderSkills(languages, 'Languages')}
         {renderSkills(frameworks_and_libraries, 'Frameworks and Libraries')}
         {renderSkills(devTools, 'Dev Tools')}
         <Footer />
      </div>
   );
}

export default Intro;
