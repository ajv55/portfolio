'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaDocker } from "react-icons/fa";
import { useMedia } from 'use-media';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  npmLink?: string;
  dockerLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, demoLink, githubLink, npmLink, dockerLink }) => {

  const isSmallScreen = useMedia({ maxWidth: '768px' });

  return (
    <div  className="relative p-6 group hover:bg-background hover:shadow-accent-light bg-foreground rounded-lg shadow-lg overflow-hidden">
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-4">
          <h3 className="lg:text-xl text-2xl font-semibold text-primary-dark group-hover:text-accent-dark mb-2">{title}</h3>
          <p className="text-primary-dark group-hover:text-text-primary  mb-4">{description}</p>
          <div className="relative h-48">
            <Image
              src={image}
              alt={title}
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between item-center space-x-4">
          <div className='flex justify-evenly items-center space-x-2'>
          {demoLink && (
            <Link className="text-indigo-400 hover:text-indigo-100" target="_blank" rel="noopener noreferrer" href={demoLink} passHref>
                Live Demo
            </Link>
          )}
          {githubLink && (
            <Link className="text-text-accent hover:text-yellow-300" target="_blank" rel="noopener noreferrer" href={githubLink} passHref> 
                GitHub
            </Link>
          )}
          {npmLink && (
            <Link className="text-secondary-light hover:text-yellow-300" target="_blank" rel="noopener noreferrer" href={npmLink} passHref>
               NPM
            </Link>
          )}
          </div>
          <Link target="_blank" passHref rel="noopener noreferrer" href={dockerLink!}><FaDocker size={isSmallScreen ? 27 : 30 } className='text-blue-600' /></Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
