import React from 'react';

function ProjectItem({ title, imgUrl, stack, link, details }) {
   return (
      <div className='flex md:flex-row flex-col md:space-y-0 space-y-5'>
         <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white dark:bg-stone-900 bg-white rounded-md md:w-5/12 hover:dark:bg-stone-800 hover:bg-stone-200"
         >
            <img
               src={imgUrl}
               alt="portfolio" 
               className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
               <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
               <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                  {stack.map((item, index) => (
                     <span
                        key={index}
                        className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
                     >
                        {item}
                     </span>
                  ))}
               </p>
            </div>
         </a>
         <div className='text-sm items-center justify-center flex ml-5 md:w-6/12 text-stone-500 dark:text-stone-400'>
            {details.map(detail => (
               <React.Fragment key={detail.id}>
                  {detail.info}
                  {detail.id !== details.length && <br />}
                  {detail.id !== details.length && <br />}
               </React.Fragment>
            ))}
         </div>
      </div>
   )
}

export default ProjectItem;