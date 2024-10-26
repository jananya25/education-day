"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-400 py-10 relative">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo and Copyright */}
          <div className="flex flex-col items-center lg:items-center">
            <Image src="/images/bvicamLogo.png" alt="BVICAM Logo" width={200} height={200} />
            <p className="mt-4 text-center lg:text-center">© BVICAM 2024. All rights reserved.</p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href={"#schedule"} className="hover:text-white">Schedule</Link></li>
              <li><Link href={"#events"} className="hover:text-white">Events</Link></li>
              <li><Link href={"#coordinators"} className="hover:text-white">Coordinators</Link></li>
              <li><Link href={"#faqs"} className="hover:text-white">FAQ's</Link></li>
            </ul>
          </div>

          {/* Social Links with Icons */}
          <div>
            <h3 className="text-white font-bold">Follow Us</h3>
            <ul className="mt-4 flex space-x-4">
              <li><a href="https://www.facebook.com/share/bC9x66sK5qH7Tqoe/" className="hover:text-white"><FaFacebook size={24} /></a></li>
              <li><a href="https://www.instagram.com/ibvicam?igsh=MXZsY2MzcnllaXdtdg==" className="hover:text-white"><FaInstagram size={24} /></a></li>
              {/* <li><a href="https://twitter.com" className="hover:text-white"><FaTwitter size={24} /></a></li> */}
              <li><a href="https://www.linkedin.com/school/bharati-vidyapeeth-institute-of-computer-applications-&-management/" className="hover:text-white"><FaLinkedin size={24} /></a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-white font-bold">Stay Updated</h3>
            <p className="mt-4 text-center lg:text-left">Sign up for our newsletter to get the latest updates.</p>
            <div className='flex space-x-2'>
            <input type="email" placeholder="Enter your email" className="mt-4 px-4 py-2 rounded bg-gray-700 text-gray-300 placeholder-gray-400" />
            <button className="mt-4 px-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
            <FaPaperPlane size={24} />
            </button>
            </div>
          </div>
        </div>

        
        <div className="relative mt-16">
          <div className="absolute inset-x-0 -top-8 transform">
            <h1 className="font-bold tracking-wider text-center opacity-30 
              text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 
              text-neutral-300">
              BVICAM
            </h1>
          </div>
        </div>

        
        <div className="text-center text-gray-500 relative z-10 mt-48"> {/* Increased margin-top */}
          <p>Made with <span className="text-red-500">❤️</span> and a lot of <span className="text-yellow-500 ">☕</span> by <a className='hover:underline' target='blank'  href="https://www.linkedin.com/in/kumar-amrendram/">Amrendram</a> |<a target='blank' className='hover:underline' href="https://www.linkedin.com/in/yatinsharma01/"> Yatin </a>  |<a target='blank' className='hover:underline' href="http://">Vijay</a> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
