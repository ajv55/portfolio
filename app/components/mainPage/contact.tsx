'use client';
import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
      if(isInView) {
          mainControls.start('visible')
      }
  }, [isInView, mainControls])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true)
    await axios.post('/api/send', {name: formData.name, email: formData.email, message: formData.message}).then((res) => {
      console.log(res);
      toast.success('Message Sent! 📧');
      setFormData({
        name: '',
        message: '',
        email: ''
      })
    }).catch((res) => {
      console.log(res)
      toast.error('missing fields')
    })
    setSending(false)
  }

  console.log(sending)

  return (
    <section className="py-12 bg-foreground" id="contact">
      <div ref={ref} className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary-dark mb-8">Contact Me</h2>

        {/* Form with motion animation */}
        <motion.form
          className="w-full max-w-xl drop-shadow-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={sendEmail}
          variants={{visible: { y: 0, opacity: 1 }}}
          initial={{ y: 300, opacity: 0 }} 
          animate={mainControls} 
          transition={{ duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 90, delay: 0.5 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`${sending && 'animate-pulse'} bg-primary hover:bg-gradient-to-br from-primary-light to-primary-dark hover:shadow-primary-dark hover:shadow-md text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              {sending ? 'Sending' : 'Send Message' }
            </button>
          </div>
        </motion.form>

        {/* Social Media Icons with hover effects */}
        <div className="flex justify-center mt-8 space-x-4">
          <motion.a
            href="https://github.com/ajv55"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-text-secondary hover:text-accent-dark"
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abel-villareal/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-text-secondary hover:text-accent-dark"
          >
            <FaLinkedin size={32} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
