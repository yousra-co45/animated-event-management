import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Star, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Slider Arrows
const NextArrow = ({ onClick }) => (
  <div 
    className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10 cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div 
    className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10 cursor-pointer bg-white/10 backdrop-blur-md hover:bg-white/20 p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400" />
  </div>
);

const Home = () => {
  // Statistics Data
  const stats = [
    { id: 1, icon: <Calendar className="w-8 h-8 text-blue-400" />, count: 150, suffix: '+', label: 'Events Hosted' },
    { id: 2, icon: <Users className="w-8 h-8 text-purple-400" />, count: 50, suffix: 'k+', label: 'Happy Attendees' },
    { id: 3, icon: <Star className="w-8 h-8 text-yellow-400" />, count: 4.9, suffix: '/5', label: 'Average Rating' },
  ];

  // Highlights Data
  const highlights = [
    { id: 1, title: 'Tech Innovators Summit 2026', date: 'Oct 15, 2026', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Conference' },
    { id: 2, title: 'Global Music Festival', date: 'Nov 22, 2026', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Entertainment' },
    { id: 3, title: 'Web3 Developer Meetup', date: 'Dec 05, 2026', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Networking' },
    { id: 4, title: 'Designers Workshop', date: 'Jan 10, 2027', image: 'https://images.unsplash.com/photo-1531498860502-7c673e02391c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Workshop' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="w-full overflow-hidden bg-gray-900 selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-4">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div data-aos="fade-down" data-aos-duration="1200" className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              The Future of Event Experiences
            </span>
          </div>
          
          <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Create Unforgettable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Moments With Us
            </span>
          </h1>
          
          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover, book, and experience the most exclusive events around the globe. From tech summits to music festivals, we bring the best to you.
          </p>
          
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/events" className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:-translate-y-1 overflow-hidden">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center gap-2">
                Explore Events
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-gray-300 transition-all duration-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:text-white backdrop-blur-sm hover:-translate-y-1">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section ref={statsRef} className="py-20 relative z-20 bg-gray-900/50 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-4 rounded-2xl bg-white/5 shadow-inner border border-white/10">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tight">
                    {statsInView ? (
                      <CountUp end={stat.count} decimals={stat.count % 1 !== 0 ? 1 : 0} duration={2.5} />
                    ) : '0'}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{stat.suffix}</span>
                  </h3>
                  <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Slider */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Highlights</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Don't miss out on our most anticipated upcoming events. Secure your spot before they sell out.
              </p>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors mt-4 md:mt-0">
              View All Events <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="px-4">
            <Slider {...sliderSettings} className="highlights-slider -mx-4">
              {highlights.map((event) => (
                <div key={event.id} className="px-4 outline-none">
                  <div className="group relative rounded-3xl overflow-hidden bg-gray-800/50 border border-white/10 hover:border-blue-500/50 transition-all duration-500 block h-[320px] cursor-pointer">
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                    </div>
                    
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wider uppercase">
                        {event.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 text-blue-400 font-medium mb-3 text-sm">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                        {event.title}
                      </h3>
                      <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                      <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300">
                        View Details <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/events" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              View All Events <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inline styles for slider customization and gradient animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .highlights-slider .slick-dots {
          bottom: -40px;
        }
        .highlights-slider .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
          transition: all 0.3s ease;
        }
        .highlights-slider .slick-dots li.slick-active button:before {
          color: #60A5FA;
          transform: scale(1.3);
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
      `}} />
    </div>
  );
};

export default Home;