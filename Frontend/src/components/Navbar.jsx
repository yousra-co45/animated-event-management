import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll check for background glass-morphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#0b1329]/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-800/60' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with Gold Glow Hover Effect (Footer Matched) */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-2 rounded-lg text-gray-950 transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <i className="fas fa-cubes text-xl"></i>
            </div>
            <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              EventHub
            </span>
          </Link>

          {/* Desktop Navigation Links with Gold Underlines */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', path: '/' },
              { name: 'Events', path: '/events' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-md ${
                  isActive(link.path) 
                    ? 'text-amber-400 font-semibold' 
                    : 'text-gray-300 hover:text-white'
                } group`}
              >
                {link.name}
                {/* Gold Underline Animation */}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-500 transform transition-transform duration-300 origin-left ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}

            {/* CTA Register Button with Premium Gold Gradient */}
            <Link 
              to="/registration" 
              className="ml-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-950 px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Register Now <i className="fas fa-arrow-right ml-1 text-xs"></i>
            </Link>
          </div>

          {/* Mobile Hamburg/Cross Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-400 focus:outline-none p-2 rounded-md bg-gray-800/40 border border-gray-700/40"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-[2px] bg-current rounded transform transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
                <span className={`w-full h-[2px] bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`w-full h-[2px] bg-current rounded transform transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Layer (Gold Themed) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0b1329]/95 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 ease-in-out transform origin-top ${
        isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
      }`}>
        <div className="px-4 pt-3 pb-6 space-y-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Events', path: '/events' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact', path: '/contact' },
            { name: 'Register Now', path: '/registration' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-950 font-bold shadow-md shadow-amber-500/10'
                  : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;