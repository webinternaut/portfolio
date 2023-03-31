import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-32 border-t border-gray-200 pt-9 mt-9">
      <div className="flex items-center justify-center">
        <Link href="https://github.com/webinternaut" passHref legacyBehavior>
          <a className="text-gray-400 hover:text-gray-500 mx-3">
            <FaGithub size={20} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/peschli" passHref legacyBehavior>
          <a className="text-gray-400 hover:text-gray-500 mx-3">
            <FaLinkedin size={20} />
          </a>
        </Link>
        <Link href="https://twitter.com/yourusername" passHref legacyBehavior>
          <a className="text-gray-400 hover:text-gray-500 mx-3">
            <FaTwitter size={20} />
          </a>
        </Link>
      </div>
      <p className="mt-4 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Paul Eschli
      </p>
    </footer>
  );
};

export default Footer;




