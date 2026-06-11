import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const socialsRef = useRef(null);
  const successModalRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const dropdownRef = useRef(null);

  const [mapUrl, setMapUrl] = useState("https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setMapUrl(`https://maps.google.com/maps?q=${lat},${lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`);
        },
        (error) => {
          console.log("Location access denied, using fallback map.", error);
        }
      );
    }
    const tl = gsap.timeline();
    tl.fromTo(headingRef.current, 
      { opacity: 0, scale: 0.95, y: -30 }, 
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power4.out' }
    );
    tl.fromTo(formRef.current.children, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
      "-=0.6"
    );
    
    tl.fromTo(socialsRef.current.children,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
      "-=0.4"
    );

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalVisible(true);
    setTimeout(() => setIsModalVisible(false), 3000);
  };

  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "registration", label: "Event Registration Help" },
    { value: "partnership", label: "Partnership / Sponsorship" }
  ];

  const socialIcons = {
    facebook: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>,
    twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>,
    linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    github: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden font-sans">
 
      <style>{`
        @keyframes fadeSlideInDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleInFlicker {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 0.5; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInUpSuccess {
          0% { opacity: 0; transform: translate(-50%, 20px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fadeSlideInDown { animation: fadeSlideInDown 0.2s ease-out forwards; }
        .animate-scaleInFlicker { animation: scaleInFlicker 1.2s ease-out forwards; }
      `}</style>

      {/* SUCCESS MODAL */}
      {isModalVisible && (
        <div 
          ref={successModalRef} 
          className="fixed top-10 left-1/2 -translate-x-1/2 z-50 bg-amber-500/20 border border-amber-500/50 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-2xl shadow-amber-950/30 flex items-center gap-4 animate-[slideInUpSuccess_0.5s_ease-out_forwards]"
        >
          <div className="p-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-extrabold tracking-tight text-amber-200">Submission Successful</p>
            <p className="text-xs text-amber-300/80 font-medium">Your inquiry has been transmitted to our network.</p>
          </div>
        </div>
      )}

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[160px] pointer-events-none"></div>
    
      {/* HEADING HEADER SECTION */}
      <div ref={headingRef} className="text-center mb-12 relative z-10 max-w-3xl px-4 mt-8">
        <span className="text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full backdrop-blur-md inline-block mb-4 shadow-sm">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent mb-4">
          Let’s Build Something Epic.
        </h1>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Have an idea or an upcoming mega event? Leave your details below and drop straight into our network.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 px-2 sm:px-4 items-stretch">
        
        {/* FORM PANEL */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 backdrop-blur-2xl p-6 sm:p-10 rounded-[24px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-amber-300 to-amber-200 bg-clip-text text-transparent tracking-tight mb-1">Drop a Line</h2>
            <p className="text-slate-500 text-xs mb-8">All fields are monitored securely. Expect a fast turnaround.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mb-8">
       
            {/* FULL NAME */}
            <div className="relative w-full group">
              <input 
                type="text" 
                required 
                placeholder=" "
                className="block py-2.5 px-1 w-full text-sm text-white bg-transparent border-0 border-b-2 border-slate-800 focus:outline-none focus:ring-0 focus:border-amber-500 transition-all duration-300 peer"
              />
              <label className="absolute text-xs text-slate-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-amber-400 uppercase tracking-wider font-semibold">
                Full Name
              </label>
            </div>

            {/* EMAIL ADDRESS */}
            <div className="relative w-full group">
              <input 
                type="email" 
                required 
                placeholder=" "
                className="block py-2.5 px-1 w-full text-sm text-white bg-transparent border-0 border-b-2 border-slate-800 focus:outline-none focus:ring-0 focus:border-amber-500 transition-all duration-300 peer"
              />
              <label className="absolute text-xs text-slate-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-amber-400 uppercase tracking-wider font-semibold">
                Email Address
              </label>
            </div>

            {/* INQUIRY PURPOSE - FIXED POSITIONING AND OVERLAP */}
            <div ref={dropdownRef} className="relative w-full z-30 pt-2">
              <label className="absolute text-amber-400/80 uppercase tracking-wider font-semibold text-[10px] top-0 left-0">
                Inquiry Purpose
              </label>
              
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full py-2.5 px-1 mt-3 text-sm bg-transparent border-b-2 transition-all duration-150 cursor-pointer flex justify-between items-center select-none ${
                  isDropdownOpen ? 'border-amber-500 text-white' : 'border-slate-800 text-slate-400'
                }`}
              >
                <span className={selectedSubject ? "text-white" : "text-slate-500"}>
                  {selectedSubject ? subjectOptions.find(opt => opt.value === selectedSubject)?.label : "Select Subject"}
                </span>
                <svg 
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180 text-amber-400' : ''}`} 
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 z-50 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl animate-fadeSlideInDown">
                  {subjectOptions.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => {
                        setSelectedSubject(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-amber-500/10 cursor-pointer transition-all duration-150 border-l-2 border-transparent hover:border-amber-500 font-medium"
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* DETAILED MESSAGE */}
            <div className="relative w-full group">
              <textarea 
                rows="3" 
                required 
                placeholder=" "
                className="block py-2.5 px-1 w-full text-sm text-white bg-transparent border-0 border-b-2 border-slate-800 focus:outline-none focus:ring-0 focus:border-amber-500 transition-all duration-300 resize-none peer"
              ></textarea>
              <label className="absolute text-xs text-slate-500 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-amber-400 uppercase tracking-wider font-semibold">
                Detailed Message
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 mt-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black font-black tracking-widest rounded-xl hover:from-amber-300 hover:via-yellow-400 hover:to-amber-500 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-xs uppercase cursor-pointer"
            >
              Dispatch Command
            </button>
          </form>

          {/* SOCIALS */}
          <div className="border-t border-slate-800/80 pt-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500/80 mb-3 text-left">
              Connect with Us
            </h3>
            
            <div ref={socialsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'GitHub'].map((platform, index) => (
                <a 
                  key={index}
                  href={`#${platform.toLowerCase()}`}
                  className="relative overflow-hidden flex items-center gap-2.5 p-2.5 bg-slate-950/40 border border-slate-800/60 rounded-xl text-slate-400 hover:text-white transition-all duration-300 group shadow-md hover:-translate-y-0.5 hover:border-amber-500/40"
                >
                  <div className="p-1.5 bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/30 rounded-lg transition-all duration-300 shrink-0">
                    {socialIcons[platform.toLowerCase()]}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold tracking-wide truncate">{platform}</span>
                    <span className="text-[9px] text-slate-600">@connect</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MAP PANEL - BOXED RESPONSIBLY WITHOUT EXCEEDING GRID ELEMENT */}
        <div className="lg:col-span-5 flex flex-col w-full min-h-[350px] lg:min-h-full">
          <div className="w-full h-full rounded-[24px] overflow-hidden border border-slate-800/60 shadow-2xl relative group bg-slate-950">
            <div className="absolute inset-0 bg-slate-950/40 pointer-events-none group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <iframe 
              title="Google Maps"
              src={mapUrl} 
              className="w-full h-full min-h-[350px] lg:absolute lg:inset-0 lg:w-full lg:h-full border-0 grayscale opacity-40 contrast-125 saturate-150 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;