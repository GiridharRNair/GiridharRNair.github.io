import React from 'react';

function TimelineItem({ company_logo, title, host, duration, details }) {
   return (
      <div className='flex flex-row space-x-1'>
         <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 rounded-md">
            <img src='./UTD_Logo.png' alt="Company Logo" className='rounded-lg md:w-44 w-60 sm:w-56'/>
         </span>
         <ol className="flex flex-col md:flex-row relative border-l border-stone-400 dark:border-stone-700">
            <li className="mb-10 ml-4">
               <div className="absolute w-3 h-3 bg-stone-400 rounded-full mt-6 md:mt-7 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
               <div className="flex flex-wrap gap-2 flex-col justify-start text-xs md:text-sm">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                     {title}
                  </h3>
                  <p className="text-sm font-semibold text-stone-900 dark:text-white">
                     {host}
                  </p>
                  <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                     {duration}
                  </div>
               </div>
               <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                  {details.map((detail, index) => (
                     <React.Fragment key={detail.id}>
                        {detail.info}
                        {index !== details.length - 1 && <br />}
                        {index !== details.length - 1 && <br />}
                     </React.Fragment>
                  ))}
               </p>
            </li>
         </ol>
      </div>
   )
}

export default TimelineItem;
