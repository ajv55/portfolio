'use client';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using an arrow icon

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the "Back to Top" button when the user reaches the contact section
  const toggleVisibility = () => {
    const contactSection = document.getElementById('contact');

    // Check if the contact section exists
    if (contactSection) {
      const contactSectionPosition = contactSection.getBoundingClientRect();

      // Check if the user has scrolled to or past the contact section
      if (contactSectionPosition.top <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-accent-dark transition-transform transform hover:scale-115"
          aria-label="Back to top"
        >
          <FaArrowUp className="h-4 w-4" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
