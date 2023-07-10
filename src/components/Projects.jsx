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
         <div className="items-center justify-center mb-8">
            <div className="space-y-5">
               {portfolio.map(project => (
                  <PortfolioItem 
                     key={project.id}
                     imgUrl={project.imgUrl}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                     details={project.details}
                  />
               ))}
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Projects;