'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaStripe } from 'react-icons/fa'; 
import { SiTypescript, SiTailwindcss, SiFramer, SiNextdotjs, SiJest, SiRedux, SiPrisma, SiResend, SiChartdotjs, SiThreedotjs, SiPostman } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md'; // For NextAuth
import Background from '../backgound';
import { useMedia } from 'use-media';





export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    const smallScreen = useMedia({minWidth: '623px'});

    const skills = [
      { icon: <FaJs size={ smallScreen ? 48 : 38} />, label: 'JavaScript' },
      { icon: <SiTypescript size={ smallScreen ? 48 : 38} />, label: 'TypeScript' },
      { icon: <FaHtml5 size={ smallScreen ? 48 : 38} />, label: 'HTML5' },
      { icon: <FaCss3Alt size={ smallScreen ? 48 : 38} />, label: 'CSS3' },
      { icon: <SiTailwindcss size={ smallScreen ? 48 : 38} />, label: 'Tailwind CSS' },
      { icon: <SiFramer size={ smallScreen ? 48 : 38} />, label: 'Framer Motion' },
      { icon: <FaReact size={ smallScreen ? 48 : 38} />, label: 'React' },
      { icon: <SiNextdotjs size={ smallScreen ? 48 : 38} />, label: 'Next.js' },
      { icon: <MdSecurity size={ smallScreen ? 48 : 38} />, label: 'NextAuth' },
      { icon: <SiResend size={ smallScreen ? 48 : 38} />, label: 'Resend' },
      { icon: <SiJest size={ smallScreen ? 48 : 38} />, label: 'Jest' },
      { icon: <SiRedux size={ smallScreen ? 48 : 38} />, label: 'Redux' },
      { icon: <SiPrisma size={ smallScreen ? 48 : 38} />, label: 'Prisma' },
      { icon: <FaDatabase size={ smallScreen ? 48 : 38} />, label: 'MongoDB' },
      { icon: <FaNodeJs size={ smallScreen ? 48 : 38} />, label: 'Node.js (Backend/API Development)' },
      { icon: <SiPostman size={ smallScreen ? 48 : 38} />, label: 'API Testing' }, // For API testing & development
      { icon: <FaStripe size={ smallScreen ? 48 : 38} />, label: 'Stripe' },
      { icon: <SiChartdotjs size={ smallScreen ? 48 : 38} />, label: 'Chart.js' },
      { icon: <SiThreedotjs size={ smallScreen ? 48 : 38} />, label: 'Three.js' },
      { icon: <SiNextdotjs size={ smallScreen ? 48 : 38} />, label: 'Next-Intl' }, // For internationalization in Next.js
    ];

  return (
    <section ref={ref} id="skills" className="bg-background relative py-16 px-4 text-center">
        <Background />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={mainControls}
        variants={{visible: { opacity: 1, y: 0 }}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl lg:text-center text-left  font-bold text-text-secondary"
      >
        My Skills
      </motion.h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 z-50 bg-neutral-light rounded-lg shadow-lg flex lg:flex-row flex-col items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 , duration: 1}}
          >
            <div className="text-primary">{skill.icon}</div>
            <p className="mt-2 text-xl font-medium text-primary">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
