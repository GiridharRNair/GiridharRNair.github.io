import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center py-8">
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
   )
}

export default Timeline;