import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Calendar, Users, Star, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Slider Arrows matching the Amber/Slate theme
const NextArrow = ({ onClick }) => (
  <div 
    className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10 cursor-pointer bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-amber-500/40 p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 group"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-amber-400" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div 
    className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10 cursor-pointer bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-amber-500/40 p-2 md:p-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 group"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-amber-400" />
  </div>
);

const Home = () => {
  // Initialize AOS Animations
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'power3.out',
    });
  }, []);

  // Statistics Data - Colored to match project branding
  const stats = [
    { id: 1, icon: <Calendar className="w-8 h-8 text-amber-400" />, count: 150, suffix: '+', label: 'Events Hosted' },
    { id: 2, icon: <Users className="w-8 h-8 text-yellow-500" />, count: 50, suffix: 'k+', label: 'Happy Attendees' },
    { id: 3, icon: <Star className="w-8 h-8 text-amber-500" />, count: 4.9, suffix: '/5', label: 'Average Rating' },
  ];

  // Highlights Data with updated fallback capability
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
    <div className="w-full overflow-hidden bg-[#030712] text-white selection:bg-amber-500/30 font-sans">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-4">
        {/* Ambient Dark Premium Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-yellow-700/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div data-aos="fade-down" data-aos-duration="1200" className="inline-block mb-4 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent text-xs font-bold tracking-widest uppercase">
              The Future of Event Experiences
            </span>
          </div>

          <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="200" className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
            Create Unforgettable <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 animate-gradient-x">
              Moments With Us
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Discover, book, and experience the most exclusive events around the globe. From tech summits to music festivals, we bring the premium edge straight to you.
          </p>

          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="600" className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/events" className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-black tracking-widest text-black transition-all duration-300 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-xl hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 overflow-hidden text-xs uppercase">
              <span className="relative flex items-center gap-2">
                Explore Events
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-slate-300 tracking-wide text-xs uppercase transition-all duration-300 bg-slate-900/40 border border-slate-800 rounded-xl hover:bg-slate-800/60 hover:text-white backdrop-blur-sm hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section ref={statsRef} className="py-20 relative z-20 bg-slate-900/20 backdrop-blur-xl border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
                className="group relative p-8 rounded-[24px] bg-slate-900/40 border border-slate-800/80 hover:border-amber-500/30 transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-amber-500/20 transition-all duration-300 shadow-inner">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tight">
                    {statsInView ? (
                      <CountUp end={stat.count} decimals={stat.count % 1 !== 0 ? 1 : 0} duration={2.5} />
                    ) : '0'}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">{stat.suffix}</span>
                  </h3>
                  <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights Slider */}
      <section className="py-32 relative">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-right">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Highlights</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-xl font-light">
                Don't miss out on our most anticipated upcoming events. Secure your spot before they sell out.
              </p>
            </div>
            <Link to="/events" className="hidden md:inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold tracking-wide text-sm transition-colors mt-4 md:mt-0">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="px-4">
            <Slider {...sliderSettings} className="highlights-slider -mx-4">
              {highlights.map((event) => (
                <div key={event.id} className="px-4 outline-none">
                  <div className="group relative rounded-[24px] overflow-hidden bg-slate-900/40 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-500 block h-[320px] cursor-pointer shadow-xl">
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        onError={(e) => {
                          // Image link broken hone par broken image icon hide karke direct default custom background lagaye ga
                          e.target.style.display = 'none';
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-80 fallback-bg"
                      />
                      {/* Custom premium fallback backdrop structure layout */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-95 group-hover:opacity-90 transition-opacity" />
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-bold text-amber-400 tracking-widest uppercase">
                        {event.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center gap-2 text-amber-400 font-semibold mb-3 text-xs uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 tracking-tight leading-snug">
                        {event.title}
                      </h3>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                      <div className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-400 transition-colors duration-300">
                        View Details <ChevronRight className="w-4 h-4 ml-0.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/events" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inline styles for slider customization and matching amber gradient animation */}
      <style dangerouslySetInnerHTML={{__html: `
        .highlights-slider .slick-dots {
          bottom: -40px;
        }
        .highlights-slider .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.2);
          font-size: 10px;
          transition: all 0.3s ease;
        }
        .highlights-slider .slick-dots li.slick-active button:before {
          color: #f59e0b;
          transform: scale(1.3);
          opacity: 0.9;
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