import timeline from '../../data/Timeline';
import Title from '../components/Title';
import TimelineItem from '../components/TimelineItem';
import RootLayout from '../components/Layout';

function Timeline() {

   return (
      <RootLayout>
         <div className="flex flex-col md:flex-row justify-center py-4 mx-5">
            <div className="w-full md:w-7/12">
               <Title>Timeline</Title>
               <ol className="mx-3 relative border-l border-gray-200 dark:border-gray-700">    
                  {timeline.map((item, index) => (
                     <TimelineItem 
                        key={index}
                        company_logo={item.company_logo}
                        title={item.title}
                        host={item.host}
                        duration={item.duration}
                        details={item.details}
                     />
                  ))}
               </ol>
            </div>
         </div>
      </RootLayout>
   )
}

export default Timeline;