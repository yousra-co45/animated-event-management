import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Central Dummy Database (Dono pages ka data array common track par laane ke liye)
const allEventsDatabase = {
  1: {
    title: "Rock Beats Music Festival",
    category: "Concerts",
    date: "June 15, 2026",
    time: "06:00 PM - 11:00 PM",
    location: "Islamabad Club, Main Hall",
    price: "PKR 3,500",
    slotsLeft: 42,
    description: "Get ready for the biggest musical night of the year! Experience high-octane live performances by top national rock bands and underground artists. Featuring immersive laser light shows, dynamic audio engineering, and premium food stalls. Bring your friends along to witness an unforgettable night of pure energy and rhythm.",
    schedule: [
      { time: "05:30 PM", title: "Gates Open & Check-In", desc: "Security clearance and digital pass verification at the main entrance." },
      { time: "06:30 PM", title: "Opening Act by Cosmic Resonance", desc: "Local indie rock band kicks off the night with experimental synth-waves." },
      { time: "08:00 PM", title: "Main Headline Performance", desc: "The country's top rock icons take over the center stage for a 2-hour nonstop set." }
    ],
    speakers: [
      { name: "Zain Ali", role: "Lead Vocalist (Rockers)", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop" },
      { name: "Hamza Shah", role: "Lead Guitarist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  2: {
    title: "Global Tech Innovators Summit",
    category: "Tech",
    date: "June 18, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "PC Hotel, Lahore",
    price: "Free Registration",
    slotsLeft: 120,
    description: "Join international tech pioneers, software engineers, and founders as they discuss Artificial Intelligence, modern frameworks, and ecosystem scalability. Includes interactive workshops and networking tea breaks.",
    schedule: [
      { time: "09:00 AM", title: "Keynote: AI Revolution", desc: "Opening speech regarding global market automation patterns." },
      { time: "11:30 AM", title: "Panel: Full Stack Future", desc: "Interactive debate with core industry technical architectures." }
    ],
    speakers: [
      { name: "Dr. Asif Khan", role: "AI Researcher", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  3: {
    title: "Corporate Leadership Gala",
    category: "Corporate",
    date: "June 22, 2026",
    time: "07:30 PM - 10:30 PM",
    location: "Serena Hotel, Islamabad",
    price: "PKR 8,000",
    slotsLeft: 15,
    description: "An exclusive networking and fine dining event designed for executives, entrepreneurs, and managers to map out modern operational paradigms and human resource optimization tactics.",
    schedule: [
      { time: "07:30 PM", title: "Welcome Drinks & Networking", desc: "Corporate meet and greet." },
      { time: "08:30 PM", title: "Dinner & Strategy Briefing", desc: "Strategic operations speech followed by 5-course formal dinner." }
    ],
    speakers: [
      { name: "M. Ahsan", role: "CEO Codecelix", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop" }
    ]
  },
  4: {
    title: "National Gaming Championship",
    category: "Sports",
    date: "June 29, 2026",
    time: "11:00 AM - 09:00 PM",
    location: "Expo Center, Karachi",
    price: "PKR 1,000",
    slotsLeft: 85,
    description: "Pakistan's premium competitive esports arena layout. Watch the elite tactical squads face off live on giant projection screens with real-time casting and high-tier prize pools.",
    schedule: [
      { time: "11:00 AM", title: "Group Stages Kickoff", desc: "Simultaneous round-robin elimination matches." },
      { time: "06:00 PM", title: "Grand Finale Showcase", desc: "The final 2 teams battle out for the championship trophy." }
    ],
    speakers: [
      { name: "Fahad Jameel", role: "Esports Caster", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop" }
    ]
  }
};

function EventDetail() {
  const { id } = useParams(); // URL se ID catch karega (e.g., /event/1)
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  // Agar URL waali ID database mein ho to woh data nikaalo, nahi to default rock beats uthao
  const event = allEventsDatabase[id] || allEventsDatabase[1];

  return (
    <div className="min-h-screen bg-[#0b1329] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Back Link */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link to="/events" className="inline-flex items-center text-sm text-gray-400 hover:text-amber-400 transition-colors gap-2 group">
          <span className="transform group-hover:-translate-x-1 transition-transform">⬅</span> Back to All Events
        </Link>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Info Blocks */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              {event.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-gray-100 to-amber-400 bg-clip-text text-transparent leading-tight">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 pt-1">
              <span className="flex items-center gap-1.5"><i className="fa-regular fa-calendar text-amber-500"></i> {event.date}</span>
              <span className="flex items-center gap-1.5"><i className="fa-regular fa-clock text-amber-500"></i> {event.time}</span>
              <span className="flex items-center gap-1.5"><i className="fa-solid fa-location-dot text-amber-500"></i> {event.location}</span>
            </div>
          </div>

          <div className="bg-gray-900/30 border border-gray-800/60 p-6 rounded-2xl backdrop-blur-sm space-y-3" data-aos="fade-up">
            <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
              <i className="fa-solid fa-circle-info"></i> About The Event
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Schedule Component */}
          <div className="space-y-6" data-aos="fade-up">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
              <i className="fa-regular fa-hourglass-half text-amber-500"></i> Event Itinerary & Schedule
            </h3>
            <div className="relative border-l border-gray-800 pl-6 space-y-8 ml-3">
              {event.schedule.map((slot, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 bg-gray-950 border-2 border-amber-500 w-4 h-4 rounded-full group-hover:bg-amber-400 transition-colors duration-300 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="space-y-1">
                    <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                      {slot.time}
                    </span>
                    <h4 className="text-base font-bold text-white pt-1 group-hover:text-amber-300 transition-colors">
                      {slot.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-normal">
                      {slot.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speakers Section */}
          <div className="space-y-6" data-aos="fade-up">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-2">
              <i className="fa-solid fa-microphone-lines text-amber-500"></i> Event Headliners & Speakers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="bg-gray-900/20 border border-gray-800/50 p-4 rounded-xl flex items-center sm:flex-col text-left sm:text-center gap-4 group hover:border-amber-500/20 transition-all duration-300">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-950 border border-gray-800 flex-shrink-0">
                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">{speaker.name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{speaker.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar Sticky Pass */}
        <div className="space-y-6">
          <div className="bg-gray-900/60 border border-gray-800/80 p-6 rounded-2xl shadow-xl sticky top-28 space-y-5" data-aos="zoom-in" data-aos-delay="100">
            <div className="space-y-1">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Ticket Passes Start At</p>
              <p className="text-3xl font-black text-amber-400 tracking-wide">{event.price}</p>
            </div>
            <div className="h-[1px] w-full bg-gray-800/60" />
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-emerald-500"></i> Full Access to all Main stages</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-emerald-500"></i> Digital Verification Pass via email</li>
              <li className="flex items-center gap-2 text-rose-400 font-bold"><i className="fa-solid fa-fire"></i> Only {event.slotsLeft} slots remaining left!</li>
            </ul>

            <Link to="/registration" className="block text-center w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-950 font-bold py-3 px-4 rounded-xl text-sm shadow-md hover:brightness-110 active:scale-95 transition-all duration-200">
              Secure Registration Spot
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default EventDetail;