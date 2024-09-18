'use client';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import toast from 'react-hot-toast';

const Resume = () => {
  const resumeRef = useRef(null);

  const downloadResume = () => {
    const input = resumeRef.current;
    const scale = 4;  // Increase the scale for better quality
  
    html2canvas(input!, { scale }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      // Calculate the image aspect ratio to fit the content properly in the PDF
      const canvasWidth = canvas.width / scale;
      const canvasHeight = canvas.height / scale;
  
      const ratio = Math.min(pdfWidth / canvasWidth, pdfHeight / canvasHeight);
  
      const imgWidth = canvasWidth * ratio;
      const imgHeight = canvasHeight * ratio;
  
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
      toast.success('Resume downloaded!')
    });
  };
  

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="p-6 text-gray-800" ref={resumeRef}>
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Abel J.Villareal</h1>
          <p className="text-sm">
            Immokalee, Fl, USA | abejevilla55@gmail.com | <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500">LinkedIn</a> | <a href="https://github.com/yourusername" className="text-blue-500">GitHub</a>
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl mb-1 font-semibold">Experience</h2>
          <hr className="border-[1px] border-zinc-950" />
          
          {/* Quick UI Library */}
        <div className="mt-4">
            <h3 className="text-xl font-semibold">Lead Developer | Quick UI Library</h3>
            <p className="text-sm">August 2024 - Present</p>
            <ul className="list-disc list-inside mt-2">
                <li>Developed a high-performance, customizable UI component library packaged as an <strong>npm module</strong>, allowing developers to easily integrate it into their projects.</li>
                <li>Implemented reusable, scalable components with a focus on flexibility and ease of use, ensuring smooth integration into modern web applications.</li>
                <li>Created custom <strong>Node.js scripts</strong> to automate build processes and improve library usability, supporting seamless setup and updates.</li>
                <li>Prioritized accessibility, responsiveness, and cross-browser compatibility to meet industry standards and ensure a consistent user experience.</li>
                <li>Published and maintained the Quick UI Library on <strong>npm</strong>, providing clear documentation for developers to integrate and contribute.</li>
            </ul>
        </div>

          
          {/* MyFitGenius Project */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Developer | MyFitGenius (Calorie & Exercise Tracking App)</h3>
            <p className="text-sm">January 2024 - August 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed a SaaS app using <strong>Next.js, Tailwind CSS, MongoDB, and Prisma</strong> for tracking fitness metrics.</li>
              <li>Integrated secure authentication with <strong>NextAuth</strong>, user data management, and Stripe for premium subscriptions.</li>
              <li>Created analytics features to monitor user progress, calorie tracking, and exercise logs.</li>
              <li>Enhanced performance and scalability by deploying the app on <strong>Vercel</strong>.</li>
            </ul>
          </div>
          
          {/* Template Genius */}
            <div className="mt-4">
                <h3 className="text-xl font-semibold">Full-stack Developer | Template Genius (Dynamic Template Builder)</h3>
                <p className="text-sm">September 2023 - December 2023</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Developed a pre-configured Next.js project template, designed to fast-track workflow and streamline development setup.</li>
                    <li>Created an npm package, <strong>template-genius</strong>, that automates the installation of dependencies such as <strong>Next.js, Tailwind CSS, NextAuth, Stripe</strong>, and more, providing developers with a ready-to-use foundation.</li>
                    <li>Built a pre-configured landing page, user authentication with <strong>NextAuth</strong>, and Stripe payment integration, enabling rapid deployment of SaaS or e-commerce projects.</li>
                    <li>Focused on enhancing developer productivity by providing a solid foundation for modern web applications, allowing for quick scaling and customization.</li>
                    <li>Published and maintained the Template Genius package on <strong>npm</strong>, offering clear documentation for easy adoption and integration.</li>
                </ul>
            </div>

          
          {/* Papa’s Llenos (Food Ordering App) */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Web Developer | Papa&#39;s Llenos (Food Ordering App)</h3>
            <p className="text-sm">March 2023 - August 2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed a custom food ordering platform with <strong>Next.js, Tailwind CSS, and MongoDB</strong>.</li>
              <li>Designed a user-friendly admin panel for managing orders, products, and real-time order tracking.</li>
              <li>Ensured seamless integration with payment gateways for secure transactions.</li>
              <li>Focused on responsive design and optimized performance for a smooth user experience.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Front-end:</strong> HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript</li>
            <li><strong>Back-end:</strong> Node.js, MongoDB, Prisma, Express</li>
            <li><strong>Tools:</strong> Git, Vercel, Storybook, Stripe, Framer Motion</li>
            <li><strong>Testing:</strong> Jest, React Testing Library, Cypress</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-2">Self-Taught Web Developer</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Quick UI Library</strong> - <a href="https://quickuilibrary.vercel.app/" target='_blank' className="text-blue-500">Link to Project</a></li>
            <li><strong>MyFitGenius (Calorie & Exercise Tracking App)</strong> - <a href="https://myfitgenius.com" target='_blank' className="text-blue-500">Link to Project</a></li>
            <li><strong>Template Genius (Dynamic Template Builder)</strong> - <a href="https://template-genius.vercel.app/" target='_blank' className="text-blue-500 ">Link to Project</a><a href='https://www.npmjs.com/package/nextjs-fullstack-template' className='pl-3 text-blue-500' target='_blank'>Link to NPM Package</a></li>
            <li><strong>Papa&#39;s Llenos (Food Ordering App)</strong> - <a href="https://papasllenos.com" target='_blank' className="text-blue-500">Link to Project</a></li>
          </ul>
        </section>
      </div>

     <div className='w-full p-2 flex justify-start items-center text-sm lg:text-lg gap-7'>
     <button
        onClick={downloadResume}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </button>
      <Link
        href='/'
        className="bg-blue-500 flex  gap-2 justify-between items-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <IoHome size={19} className='text-white' />
        Back to Home
      </Link>
     </div>
    </div>
  );
};

export default Resume;