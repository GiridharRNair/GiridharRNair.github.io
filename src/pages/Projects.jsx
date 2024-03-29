import projects from '../../data/PersonalProjects';
import Title from '../components/Title';
import PortfolioItem from '../components/ProjectItem';
import RootLayout from '../components/Layout';

function Projects() {
   return (
      <RootLayout>
         <div className="flex justify-center items-center py-4 mx-5">
            <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12">
               <Title>Projects</Title>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                  {projects.map((project, index) => (
                     <PortfolioItem 
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                        details={project.details}
                     />
                  ))}
               </div>
            </div>
         </div>
      </RootLayout>
   )
}

export default Projects;
