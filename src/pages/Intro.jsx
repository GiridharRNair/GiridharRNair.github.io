import { name, currentUniversity, description, languages, frameworks_and_libraries, devTools } from '../../data/Intro';
import RootLayout from '../components/Layout';

function Intro() {

   const renderSkills = (skillsArray, title) => (
      <div className="flex flex-col items-center justify-center text-center mb-6">
        <h1 className="text-stone-900 text-2xl dark:text-white mb-1 font-semibold">{title}</h1>
        <div className="flex flex-wrap justify-center md:w-3/5 w-11/12 mx-0">
          {skillsArray.map((item, index) => (
            <span
              className="m-1 px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
    
    
   

   return (
      <RootLayout>
         <div className="pt-8 pb-4 flex items-center justify-center lg:flex-row text-center lg:text-left lg:space-y-0 space-y-4 flex-col lg:space-x-4 mx-auto">
            <img src="./MyHeadshot.jpg" alt="Picture of Giridhar Nair" width={200} className='rounded-lg'/>
            <div className='dark:text-stone-400 text-stone-500 lg:w-5/12 mx-5 space-y-2'>
               <h1 className="text-stone-900 text-4xl dark:text-white mb-2 font-bold">{name}</h1>
               <p className="text-base md:text-l mb-2 font-medium">{currentUniversity}</p>
               <p className='lg:text-left text-center'>{description}</p>
            </div>
         </div>
         {renderSkills(languages, 'Languages')}
         {renderSkills(frameworks_and_libraries, 'Frameworks and Libraries')}
         {renderSkills(devTools, 'Dev Tools')}
      </RootLayout>
   );
}

export default Intro;
