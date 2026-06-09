import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 👈 Dynamic Routing Navigation ke liye import kiya
import AOS from 'aos';
import 'aos/dist/aos.css';

const dummyEvents = [
  {
    id: 1,
    title: "Rock Beats Music Festival",
    category: "Concerts",
    date: "June 15, 2026",
    location: "Islamabad Club",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop",
    price: 3500,
    displayPrice: "PKR 3,500"
  },
  {
    id: 2,
    title: "Global Tech Innovators Summit",
    category: "Tech",
    date: "June 18, 2026",
    location: "PC Hotel, Lahore",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    price: 0,
    displayPrice: "Free Registration"
  },
  {
    id: 3,
    title: "Corporate Leadership Gala",
    category: "Corporate",
    date: "June 22, 2026",
    location: "Serena Hotel, Islamabad",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
    price: 8000,
    displayPrice: "PKR 8,000"
  },
  {
    id: 4,
    title: "National Gaming Championship",
    category: "Sports",
    date: "June 29, 2026",
    location: "Expo Center, Karachi",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    price: 1000,
    displayPrice: "PKR 1,000"
  },
  {
    id: 5,
    title: "Sufi Night & Cultural Gala",
    category: "Concerts",
    date: "July 05, 2026",
    location: "Lok Virsa, Islamabad",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
    price: 2500,
    displayPrice: "PKR 2,500"
  },
  {
    id: 6,
    title: "AI & Future Micro-Workshop",
    category: "Tech",
    date: "July 12, 2026",
    location: "Codecelix HQ, Rawalpindi",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop",
    price: 500,
    displayPrice: "PKR 500"
  }
];

function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(10000);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🔍 Filter & Search Logic
  const filteredEvents = dummyEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesPrice = event.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Strict spelling matching array
  const categories = ["All", "Concerts", "Corporate", "Sports", "Tech"];

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setMaxPrice(10000);
  };

  return (
    <div className="min-h-screen bg-[#0b1329] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Page Header - Fixed layout style with explicit bottom padding to prevent font clipping */}
      <div className="max-w-4xl mx-auto text-center mb-10 pb-4 relative z-10" data-aos="fade-up">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Live Portal
        </span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mt-4 mb-2 pb-3 leading-tight sm:leading-relaxed">
          Upcoming Premium Events
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Explore, filter, and book slots for exclusive experiences across Pakistan. Managed securely by Codecelix.
        </p>
      </div>

      {/* Live Counter Stats Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-aos="fade-up" data-aos-delay="50">
        {[
          { label: "Total Events Available", val: dummyEvents.length, icon: "fa-solid fa-layer-group" },
          { label: "Matching Results", val: filteredEvents.length, icon: "fa-solid fa-filter" },
          { label: "Premium Concerts", val: dummyEvents.filter(e => e.category === "Concerts").length, icon: "fa-solid fa-guitar" },
          { label: "Active Cities", val: "4+", icon: "fa-solid fa-city" }
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900/40 border border-gray-800/80 p-4 rounded-xl backdrop-blur-sm flex items-center space-x-3">
            <div className="text-amber-400 bg-gray-800/50 p-2 rounded-lg"><i className={stat.icon}></i></div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
              <p className="text-lg font-bold text-white">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Control Panel (Filters) */}
      <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800/80 backdrop-blur-md shadow-xl space-y-6">
          
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            {/* Search Box */}
            <div className="relative w-full lg:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                placeholder="Search by title, category, city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-950/80 border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/20 transition-all duration-300"
              />
            </div>

            {/* Category Tabs with Correct Spellings */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-950 shadow-md'
                      : 'bg-gray-800/40 text-gray-400 border border-gray-700/40 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full bg-gray-800/60" />

          {/* Advanced Price Slider Container */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="w-full sm:w-72 space-y-1">
              <div className="flex justify-between text-xs font-bold text-gray-400">
                <span>Max Budget:</span>
                <span className="text-amber-400">PKR {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-amber-500 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <button 
              onClick={handleReset}
              className="text-xs font-semibold text-gray-400 hover:text-amber-400 flex items-center gap-1.5 self-end sm:self-center transition-colors"
            >
              <i className="fa-solid fa-arrow-rotate-left"></i> Reset Active Filters
            </button>
          </div>

        </div>
      </div>

      {/* Events Grid Display */}
      <div className="max-w-6xl mx-auto">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                data-aos="zoom-in"
                className="group relative bg-gray-900/40 border border-gray-800/60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/30 hover:shadow-[0_15px_35px_rgba(245,158,11,0.05)]"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-950">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 right-3 bg-gray-950/90 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-black backdrop-blur-sm shadow-md">
                    {event.category}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-amber-400/90 tracking-wide flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar-days text-amber-500"></i> {event.date}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors duration-200 line-clamp-1">
                      {event.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-gray-600 group-hover:text-amber-500 transition-colors"></i>
                    <span className="line-clamp-1">{event.location}</span>
                  </p>

                  <div className="h-[1px] w-full bg-gray-800/60" />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-sm font-black text-white tracking-wide">
                      {event.price === 0 ? "FREE" : event.displayPrice}
                    </span>
                    {/* 👇 Yahan button ko pure dynamic Link system se badal diya ha */}
                    <Link 
                      to={`/event/${event.id}`} 
                      className="text-xs text-center bg-gray-800/80 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 hover:text-gray-950 text-amber-400 border border-gray-700/50 hover:border-transparent px-4 py-2 rounded-xl font-bold transition-all duration-300 shadow-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-900/20 rounded-2xl border border-dashed border-gray-800 max-w-xl mx-auto" data-aos="fade-up">
            <div className="text-amber-400/30 text-5xl mb-4">
              <i className="fa-solid fa-sliders"></i>
            </div>
            <h4 className="text-white font-bold text-lg mb-1">No Matching Events</h4>
            <p className="text-gray-500 text-sm max-w-sm mx-auto mb-5">
              Koi bhi event aapki select karda category, search criteria, ya budget limits se match nahi kar raha.
            </p>
            <button 
              onClick={handleReset}
              className="bg-gray-800 text-amber-400 border border-gray-700/60 hover:text-gray-950 hover:bg-amber-400 text-xs px-4 py-2 rounded-xl font-bold transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default Events;