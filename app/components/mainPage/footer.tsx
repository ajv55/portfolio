import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-background py-6">
        <div className="container mx-auto text-center">
          <p className="text-text-primary text-sm">
            © {new Date().getFullYear()} Abel J. Villareal. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link className="text-text-secondary hover:text-text-accent" target="_blank" rel="noopener noreferrer" href="https://github.com/ajv55" passHref>
                <FaGithub size={24} />
            </Link>
            <Link className="text-text-secondary hover:text-text-accent" target="_blank"  href="https://www.linkedin.com/in/abel-villareal-630536320/" passHref>
                <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  