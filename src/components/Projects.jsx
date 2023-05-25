import React, { useEffect, useState } from 'react';
import portfolio from '../data/projects';
import Title from './Title';
import PortfolioItem from './ProjectItem';
import Footer from './Footer';

function Projects() {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
     setIsActive(true);
   }, []);

   return (
      <div className={`fade-in ${isActive ? 'active' : ''}`}>
         <div className="pt-8 flex items-center w-full md:w-7/12 flex-col mx-auto">
            <Title>Projects</Title>
         </div>
         <div className="flex flex-col md:flex-row items-center justify-center mb-8">
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
         <Footer />
      </div>
   )
}

export default Projects;