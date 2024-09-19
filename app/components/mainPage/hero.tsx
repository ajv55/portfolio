'use client';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Typewriter } from 'react-simple-typewriter'
import Background from '../backgound';

export default function Hero() {
  return (
    <section className="relative h-screen  flex lg:flex-row-reverse flex-col-reverse items-center justify-center bg-background">
        <Background />
     <Canvas className="z-0 w-full h-full">
  <ambientLight intensity={0.8} /> {/* Increase ambient light intensity */}
  <pointLight intensity={1} position={[10, 10, 10]} color="#FFFFFF" /> {/* Stronger point light */}
  
  {/* Add a second point light for more dynamic lighting */}
  <pointLight intensity={0.8} position={[-10, -10, -10]} color="#FF4500" /> {/* Vibrant reddish light for added contrast */}
  
  <Sphere visible args={[1, 100, 200]} scale={2}> {/* Increased scale for larger appearance */}
    <MeshDistortMaterial 
      color="#8DFFC7" 
      distort={0.8}   
      speed={3}        
      roughness={0.2}  
      emissive="#44E09F"  
      emissiveIntensity={0.5}  
    />
  </Sphere>
</Canvas>


      <div className="z-10 pl-5 text-center flex flex-col justify-center items-start w-full h-screen space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-extrabold text-neutral-light sm:text-6xl"
        >
          Hi, I&#39;m <span className='bg-gradient-to-tr from-text-primary to-accent-dark text-transparent bg-clip-text'>Abel</span> 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg text-text-primary max-w-xl text-left sm:text-xl"
        >
          A passionate fullstack web developer specializing in creating dynamic, responsive, and interactive web applications using modern technologies like <span className='text-accent-dark'><Typewriter words={[
  'JavaScript',
  'Next.js',
  'React',
  'TypeScript',
  'MongoDB',
  'Tailwind CSS',
  'Redux',
  'Prisma',
  'Framer Motion',
  'Three.js',
  'Prisma',
  'Jest',
  'Testing Library',
  'Node.js',
  'Vercel',
  'NextAuth',
  'Resend',
  'HTML5',
  'CSS3',
  'Responsive Design',
  'API Development',
  'RESTful APIs',
  'CRUD Operations',
  'Backend Integration',
]} cursorColor='#8DFFC7' cursor cursorBlinking={true} loop={0} typeSpeed={100} deleteSpeed={80} delaySpeed={2000}   /></span>
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="px-8 py-3 bg-gradient-to-br from-primary-light to-accent-light hover:bg-gradient-to-tr hover:from-primary-light hover:text-accent-light hover:outline-2 hover:outline hover:outline-accent-light  hover:to-primary-dark hover:shadow-accent-dark text-white rounded-full inline-block hover:bg-indigo-500 hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Explore My Work
        </motion.a>
      </div>
    </section>
  );
}
