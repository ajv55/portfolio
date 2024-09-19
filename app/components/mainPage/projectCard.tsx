import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  npmLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, demoLink, githubLink, npmLink }) => {


  return (
    <div className="relative p-6 group hover:bg-background hover:shadow-accent-light bg-foreground rounded-lg shadow-lg overflow-hidden">
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

        <div className="flex space-x-4">
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
      </div>
    </div>
  );
};

export default ProjectCard;
