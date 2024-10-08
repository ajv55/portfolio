'use client'
import { useEffect, useRef } from 'react';
import Background from '../backgound';
import ProjectCard from './projectCard';
import { useAnimation, useInView, motion } from 'framer-motion';

const projects = [
    {
      title: 'Quick UI Library',
      description: `A component library built with JavaScript and TypeScript. It offers a collection of pre-built, customizable components using clsx for styling. The library is published on npm as 'quick-ui-library' (npm i quick-ui-library) to make it accessible for developers looking for easy-to-integrate UI components.`,
      image: '/quickui.jpeg', 
      demoLink: 'https://quickuilibrary.vercel.app/', 
      githubLink: 'https://github.com/ajv55/quickui',
      dockerLink: 'https://hub.docker.com/repository/docker/abelj5/quick-ui/general'
    },
    {
        title: 'MyFitGenius',
        description: `A comprehensive SaaS platform designed to help users track their calories, macronutrients, water intake, and steps. It calculates the user's maintenance calories based on age, weight, height, gender, activity level, and goal weight. Users can log meals for breakfast, lunch, dinner, and snacks while the app tracks macronutrients in real-time. Features also include progress bars for daily calorie goals, water intake tracking, step tracking, and in-depth analytics to monitor their health and fitness journey.`,
        image: '/myfitgenius.jpeg', 
        demoLink: 'https://www.myfitgenius.com/', 
        githubLink: 'https://github.com/ajv55/health',
        dockerLink: 'https://hub.docker.com/repository/docker/abelj5/myfitgenius/general'
      },
      {
        title: 'PapasLlenos',
        description: `A landing page and e-commerce platform built for a business selling fully loaded potatoes. The website allows users to order their custom-loaded potatoes, with an automated receipt emailed to them. The backend tracks all orders, enabling the client to view, manage, and download order data in PDF format. Additional features include an analytics dashboard for tracking sales and a content management section where the client can add or remove items from the menu.`,
        image: '/papas.jpeg', 
        demoLink: 'https://www.papasllenos.com/', 
        githubLink: 'https://github.com/ajv55/papas',
        dockerLink: 'https://hub.docker.com/repository/docker/abelj5/papasllenos/general'
      },
      {
        title: 'Template-Genius',
        description: `A Next.js project template designed to fast-track future development. The template comes pre-configured with TypeScript, Tailwind CSS, Framer Motion for animations, NextAuth for authentication, Stripe for payment integration, and a pre-built landing page. Created to streamline the setup of new projects that use these popular technologies, it helps accelerate development while maintaining best practices. Available as an NPM package for easy installation.`,
        image: '/npm.jpg', 
        demoLink: 'https://template-genius.vercel.app/', 
        githubLink: 'https://github.com/ajv55/template',
        npmLink: 'https://www.npmjs.com/package/template-genius', 
        dockerLink: 'https://hub.docker.com/repository/docker/abelj5/template-genius/general'
      },
  ];
  

const Projects = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])


  return (
    <section ref={ref} className="py-12 relative bg-background" id="projects">
        <Background />
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-center text-left font-bold text-accent-dark mb-8">My Projects</h2>
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-50">
          {projects.map((project, index) => (
            <motion.div className='w-full grid grid-cols-1'  initial={{scale: 0, opacity: 0, y: -50}} variants={{visible: {scale: 1, opacity: 1, y: 0}}} animate={mainControls} transition={{duration: 1, stiffness: 100, delay: index * 0.5, type: 'spring' }} key={index}>
              <ProjectCard 
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              npmLink={project?.npmLink}
              dockerLink={project?.dockerLink}
            />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
