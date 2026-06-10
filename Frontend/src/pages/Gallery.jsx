import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 📸 Fresh & Unique Premium Images for Gallery
const galleryImages = [
  {
    id: 1,
    title: "Live Concert Laser Show & Crowd",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AI Keynote Presentation Screen",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Executive Round Table Networking",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Pro Gaming Tournament Stage",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Sufi Night Traditional Ambient Lighting",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Tech Hackathon Development Session",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Annual Business Excellence Awards",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "E-Sports Championship Trophy Setup",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
  }
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 🔍 Filter Logic
  const filteredImages = galleryImages.filter(img => 
    selectedCategory === "All" || img.category === selectedCategory
  );

  const categories = ["All", "Concerts", "Corporate", "Sports", "Tech"];

  // 🖼️ Lightbox Handlers
  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div className="min-h-screen bg-[#0b1329] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 pb-4 relative z-10" data-aos="fade-up">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Visual Memories
        </span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent mt-4 mb-2 pb-3 leading-tight sm:leading-relaxed">
          Our Event Gallery
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Take a look at the premium, high-energy moments captured by Codecelix across Pakistan.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-950 shadow-md transform scale-105'
                : 'bg-gray-800/40 text-gray-400 border border-gray-700/40 hover:text-white hover:border-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 🖼️ Event Images Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((item, index) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={index * 50}
            onClick={() => openLightbox(item)}
            className="group relative h-64 bg-gray-900/40 border border-gray-800/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30 hover:shadow-[0_15px_35px_rgba(245,158,11,0.1)]"
          >
            {/* Image Container with Hover Effect */}
            <div className="w-full h-full overflow-hidden bg-gray-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Hover Gradient Overlay and Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[10px] uppercase font-extrabold text-amber-400 tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 w-fit mb-2">
                {item.category}
              </span>
              <h4 className="text-sm font-bold text-white tracking-wide line-clamp-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <i className="fa-solid fa-expand text-amber-400 text-[10px]"></i> Click to view large
              </p>
            </div>
            
            {/* Initial Category Tag (Invisible on Hover) */}
            <span className="absolute top-3 right-3 bg-gray-950/80 text-amber-400 border border-amber-500/15 px-2.5 py-0.5 rounded-full text-[11px] font-bold backdrop-blur-sm shadow-sm group-hover:opacity-0 transition-opacity duration-300">
              {item.category}
            </span>
          </div>
        ))}
      </div>

      {/* 🌌 Lightbox View Popup */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 backdrop-blur-md p-4 transition-all duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-gray-400 hover:text-white bg-gray-900/60 p-3 rounded-full border border-gray-800 transition-colors"
            onClick={closeLightbox}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>

          {/* Lightbox Main Box */}
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Stop closing popup when clicking image inside
          >
            <img 
              src={lightboxImage.image} 
              alt={lightboxImage.title} 
              className="max-w-full max-h-[75vh] object-contain rounded-xl border border-gray-800 shadow-2xl"
            />
            {/* Caption Info below image */}
            <div className="text-center mt-4 space-y-1">
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                {lightboxImage.category}
              </span>
              <h3 className="text-lg font-bold text-white">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Gallery;