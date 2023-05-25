import React, { useEffect, useState } from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
import Footer from './Footer';

function Timeline() {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
     setIsActive(true);
   }, []);

   return (
      <div className={`fade-in ${isActive ? 'active' : ''}`}>
         <div className="flex flex-col md:flex-row justify-center pt-8 pb-4">
            <div className="w-full md:w-7/12">
               <Title>Timeline</Title>
               {timeline.map(item => (
                  <TimelineItem 
                     key={item.id}
                     year={item.year}
                     title={item.title}
                     host={item.host}
                     duration={item.duration}
                     details={item.details}
                  />
               ))}
            </div>
         </div>
         <Footer />
      </div>
   )
}

export default Timeline;