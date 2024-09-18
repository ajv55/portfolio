'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaStripe } from 'react-icons/fa'; 
import { SiTypescript, SiTailwindcss, SiFramer, SiNextdotjs, SiJest, SiRedux, SiPrisma, SiResend, SiChartdotjs, SiThreedotjs, SiPostman } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md'; // For NextAuth
import Background from '../backgound';

const skills = [
    { icon: <FaJs size={48} />, label: 'JavaScript' },
    { icon: <SiTypescript size={48} />, label: 'TypeScript' },
    { icon: <FaHtml5 size={48} />, label: 'HTML5' },
    { icon: <FaCss3Alt size={48} />, label: 'CSS3' },
    { icon: <SiTailwindcss size={48} />, label: 'Tailwind CSS' },
    { icon: <SiFramer size={48} />, label: 'Framer Motion' },
    { icon: <FaReact size={48} />, label: 'React' },
    { icon: <SiNextdotjs size={48} />, label: 'Next.js' },
    { icon: <MdSecurity size={48} />, label: 'NextAuth' },
    { icon: <SiResend size={48} />, label: 'Resend' },
    { icon: <SiJest size={48} />, label: 'Jest' },
    { icon: <SiRedux size={48} />, label: 'Redux' },
    { icon: <SiPrisma size={48} />, label: 'Prisma' },
    { icon: <FaDatabase size={48} />, label: 'MongoDB' },
    { icon: <FaNodeJs size={48} />, label: 'Node.js (Backend/API Development)' },
    { icon: <SiPostman size={48} />, label: 'API Testing' }, // For API testing & development
    { icon: <FaStripe size={48} />, label: 'Stripe' },
    { icon: <SiChartdotjs size={48} />, label: 'Chart.js' },
    { icon: <SiThreedotjs size={48} />, label: 'Three.js' },
    { icon: <SiNextdotjs size={48} />, label: 'Next-Intl' }, // For internationalization in Next.js
  ];



export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <section ref={ref} id="skills" className="bg-background relative py-16 px-4 text-center">
        <Background />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={mainControls}
        variants={{visible: { opacity: 1, y: 0 }}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl font-bold text-text-secondary"
      >
        My Skills
      </motion.h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 z-50 bg-neutral-light rounded-lg shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 , }}
          >
            <div className="text-primary">{skill.icon}</div>
            <p className="mt-2 text-xl font-medium text-primary">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
