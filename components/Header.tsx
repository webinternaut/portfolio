import Link from 'next/link';
import { useTheme } from 'next-themes';
import Toggle from './toggle';
import React, { useState } from "react";
import { useRouter } from "next/router"
import Head from 'next/head';
import ThemeChanger from '../components/ThemeChanger';


const Header = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter()
  const [navbar, setNavbar] = useState(false);

  return (
<div>
      <Head>
       
        <title>Paul Eschli Design & Innovation Portfolio</title>
        <meta
          name="Paul Eschli Design & Innovation Portfolio"
          content="Paul Eschli Design & Innovation Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-black-500 border-b-2 border-black:500 mb-20">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
          <div className="flex items-center justify-between py-3 md:py-20 md:block">
              <a href="#">
              <h2 className="text-4xl font-bold font-sans hover:text-black text-gray-500 dark:text-white hover:animate-pulse">Paul Eschli</h2>
                
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black dark:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
          <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
              <ul className="md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-500 dark:text-white text-l font-semibold ">
                <Link href="/" passHref legacyBehavior>
                  <a className={router.pathname == "/" ? "active" : ""}>
                    Projects
                  </a>
                </Link>
                </li>
                <li className="text-gray-500 dark:text-white text-l font-semibold">
                <Link href="/about" passHref legacyBehavior>
                  <a className={router.pathname == "/about" ? "active" : ""}>
                    About
                  </a>
                </Link>
                </li>
                <li className="text-gray-500 dark:text-white text-l font-semibold">
                <Link href="/resume" passHref legacyBehavior>
                  <a className={router.pathname == "/resume" ? "active" : ""}>
                    Resume
                  </a>
                </Link>
                </li>
                <li className="text-gray-500 dark:text-white text-l font-semibold">
                <Link href="/contact" passHref legacyBehavior>
                  <a className={router.pathname == "/contact" ? "active" : ""}>
                    Contact
                  </a>
                </Link>
                </li>
                <li></li>
                <li>
                <ThemeChanger />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Header