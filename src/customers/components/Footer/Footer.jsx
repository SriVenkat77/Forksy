import React, { useState } from 'react'; // Import useState
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false); // State to track focus

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">Forksy</h2>
            <p className="text-gray-400">
              Indulge in the flavors of your favorite dishes without stepping outside. 
              Our easy-to-use app allows you to browse menus, place orders, and track your delivery in real-time. 
              Experience the joy of great food without the hassle of cooking or going out. 
              Let us take care of your meals today in Coimbatore.
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/menu" className="hover:text-white">Menu</a></li>
              <li><a href="/order" className="hover:text-white">Order Now</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <form className="flex">
              <input 
                type="email" 
                className={`w-full px-4 py-2 rounded-l-md focus:outline-none ${isFocused ? 'text-blue-500' : 'text-black'}`} // Change text color based on focus
                placeholder="Enter your email" 
                onFocus={() => setIsFocused(true)}  // Set focus state to true when input is focused
                onBlur={() => setIsFocused(false)}  // Set focus state to false when input is blurred
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-r-md focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          {[
            { icon: faFacebookF, link: "#" },
            { icon: faTwitter, link: "#" },
            { icon: faInstagram, link: "#" },
            { icon: faLinkedin, link: "#" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              className="text-gray-400 hover:text-white text-2xl"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </div>

        <div className="text-center text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} Forksy. All rights reserved. | Delivering delicious meals in Coimbatore.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
