import Link from 'next/link';
import { useTheme } from 'next-themes';
import Toggle from './toggle';
import React, { useState } from "react";
import { useRouter } from "next/router"
import Head from 'next/head';
import ThemeChanger from '../components/ThemeChanger';
import { FaBars } from 'react-icons/fa';


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
      <nav className="w-full bg-black-500 border-b-2 border-black:500 mb-8">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
          <div className="flex items-center justify-between py-3 md:py-20 md:block">  
              <a href="#">
              <h2 className="text-4xl font-semibold font-sans hover:text-black text-gray-500 dark:text-white hover:animate-pulse">Paul Eschli</h2>
                
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border h-10"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaBars className="w-6 h-6 text-gray-500 dark:text-white" size={30} />
                  ) : (
                    <FaBars className="w-6 h-6 text-gray-500 dark:text-white" size={30} />
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
              <li className="font-semibold text-gray-600 dark:text-white text-l h-10">
                <Link href="/" passHref legacyBehavior>
                  <a className={router.pathname == "/" ? "active" : ""}>
                    Projects
                  </a>
                </Link>
                </li>
                <li className="font-semibold text-gray-600 dark:text-white text-l h-10">
                <Link href="/about" passHref legacyBehavior>
                  <a className={router.pathname == "/about" ? "active" : ""}>
                    About
                  </a>
                </Link>
                </li>
                <li className="font-semibold text-gray-600 dark:text-white text-l h-10">
                <Link href="/contact" passHref legacyBehavior>
                  <a className={router.pathname == "/contact" ? "active" : ""}>
                    Contact
                  </a>
                </Link>
                </li>
                <li>|</li>
                <li>
                <div className="float-right"><ThemeChanger /></div>
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