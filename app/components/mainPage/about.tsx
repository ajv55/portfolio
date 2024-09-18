'use client';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';


export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

  return (
    <section id="about" className="bg-foreground py-16 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        variants={{visible: { opacity: 1, y: 0 }}}
        animate={mainControls}
        ref={ref}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-4xl font-bold text-primary-dark"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        variants={{visible: { opacity: 1, y: 0 }}}
        animate={mainControls}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="mt-4 text-xl text-neutral-dark max-w-4xl mx-auto"
      >
        Hi, I&#39;m Abel, a self-taught web developer with a passion for creating beautiful and functional web applications.
        I specialize in building modern, responsive websites using Next.js, React, TypeScript, and Tailwind CSS. 
        My background includes hands-on experience with APIs, databases, and testing, which allows me to craft 
        end-to-end solutions tailored to meet diverse needs.
      </motion.p>
    </section>
  );
}
