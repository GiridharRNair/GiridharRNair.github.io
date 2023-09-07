import React from 'react';

function ProjectItem({ title, imgUrl, stack, link, details }) {

   
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white dark:bg-stone-900 dark:hover:bg-stone-800 bg-white hover:bg-stone-100 rounded-md overflow-hidden"
      >
         <img
            src={imgUrl}
            alt="project image" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className="p-3 space-y-2">
            <h3 className="text-lg md:text-xl dark:text-white font-semibold ">{title}</h3>
            <p>{details}</p>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
               {stack.map((item, index) => (
                  <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   )
}

export default ProjectItem;
