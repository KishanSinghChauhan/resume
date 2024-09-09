import React from 'react'
import { Projects_List } from '../constant';
import Project from '@/components/Project';

const Projects = () => {
  return (
    <section
        className="container flex flex-col items-center my-[120px]"
        id="projects"
      >
        <h2 className="text-6xl">Projects</h2>
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-20 my-20">
          {Projects_List.map((project, index) =>  (
              <Project
                imgSrc={project.imgSrc}
                title={project.name}
                caseStudyLink={project.caseStudyLink}
                webLink={project.webLink}
                key={index}
                borderColor={project.borderColor}
                tags={project.tags}
                comingSoon={project.comingSoon || false}
                isPrivate={project.isPrivate || false}
              />
            ))}
        </div>
        </section>
  )
}

export default Projects;