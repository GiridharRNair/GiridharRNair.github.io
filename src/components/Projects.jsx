import React, { useEffect, useState } from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './ProjectItem';

function Projects() {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
     setIsActive(true);
   }, []);

   return (
      <div className={`fade-in ${isActive ? 'active' : ''}`}>
         <div className="flex flex-col md:flex-row items-center justify-center my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {portfolio.map(project => (
                  <PortfolioItem 
                     key={project.id}
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Projects;