import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative bg-[#0b1329] text-gray-300 border-t border-gray-800/80 mt-auto overflow-hidden">
      {/* Absolute Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2 rounded-lg text-gray-950 transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <i className="fa-solid fa-cubes text-xl"></i>
              </div>
              <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                EventHub
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting unforgettable experiences with seamless management. From corporate galas to vibrant concerts, we bring your vision to life.
            </p>
            {/* Social Media Links with Premium Hover Effects */}
            <div className="flex space-x-3 pt-2">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-amber-400 hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <i className={`fa-brands fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white font-bold text-lg tracking-wide border-b-2 border-amber-500/30 pb-2 w-16">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home Portfolio', path: '/' },
                { name: 'Upcoming Events', path: '/events' },
                { name: 'Media Gallery', path: '/gallery' },
                { name: 'Join Registration', path: '/registration' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-amber-400 mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 text-xs">
                      ➔
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Contact Info with Fixed Icons */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white font-bold text-lg tracking-wide border-b-2 border-amber-500/30 pb-2 w-16">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* Location */}
              <li className="flex items-start space-x-3 group">
                <div className="w-9 h-9 flex items-center justify-center text-amber-400 bg-gray-800/40 rounded-full border border-gray-700/30 group-hover:bg-amber-400 group-hover:text-gray-950 transition-all duration-300 shadow-sm flex-shrink-0">
                  <i className="fa-solid fa-map-location-dot text-sm"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-200 pt-1.5">
                  Codecelix Rawalpindi,<br />Pakistan
                </span>
              </li>
              
              {/* Phone */}
              <li className="flex items-center space-x-3 group">
                <div className="w-9 h-9 flex items-center justify-center text-amber-400 bg-gray-800/40 rounded-full border border-gray-700/30 group-hover:bg-amber-400 group-hover:text-gray-950 transition-all duration-300 shadow-sm flex-shrink-0">
                  <i className="fa-solid fa-phone text-sm"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-200 cursor-pointer">
                  +92 300 1234567
                </span>
              </li>
              
              {/* Email */}
              <li className="flex items-center space-x-3 group">
                <div className="w-9 h-9 flex items-center justify-center text-amber-400 bg-gray-800/40 rounded-full border border-gray-700/30 group-hover:bg-amber-400 group-hover:text-gray-950 transition-all duration-300 shadow-sm flex-shrink-0">
                  <i className="fa-solid fa-envelope text-sm"></i>
                </div>
                <span className="group-hover:text-white transition-colors duration-200 cursor-pointer">
                  support@eventhub.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-white font-bold text-lg tracking-wide border-b-2 border-amber-500/30 pb-2 w-16">
              Updates
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get immediate event updates and early bird offers.
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-gray-900/80 border border-gray-700/60 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-950 px-3.5 rounded-lg text-sm font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p className="text-center sm:text-left mb-3 sm:mb-0">
            &copy; {new Date().getFullYear()} EventHub. All Rights Reserved. Designed by Team Codecelix Web(2).
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;