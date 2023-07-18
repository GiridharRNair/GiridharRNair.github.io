import React from 'react';

function TimelineItem({ company_logo, title, host, duration, details }) {
   return (
     <li className="mb-8 ml-6">   
       <img className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white dark:ring-stone-900" src={company_logo} alt="Company Logo"/>         
       <div className='flex flex-col xl:flex-row xl:space-x-2 xl:items-center'>
         <h3 className="items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
         <p className="xl:pt-1 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{host}</p>
       </div>
       <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{duration}</time>
       <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
         {details.map((detail, index) => (
           <React.Fragment key={index}>
             {detail.info}
             {index !== details.length - 1 && <br />}
             {index !== details.length - 1 && <br />}
           </React.Fragment>
         ))}
       </p>
     </li>
   );
 }
 

export default TimelineItem;
