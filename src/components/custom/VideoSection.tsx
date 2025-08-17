import React, { useState } from 'react';

export default function VideoSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="py-12 md:py-24 lg:py-32 bg-white px-4">
      <div className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl md:rounded-2xl mx-auto w-full md:w-[90%] lg:w-[80%]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-2xl"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30 rounded-xl md:rounded-2xl" />

        {/* Glassy Frost Card */}
        <div className="relative z-10 w-full h-[20rem] md:h-[24rem] lg:h-[28rem] flex items-center justify-center px-4">
          <div 
            className="p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-[40px] lg:rounded-[60px] xl:rounded-[80px] flex flex-col justify-center"
            style={{
              width: '85%',
              height: '90%',
              background: 'rgba(203, 203, 203, 0.03)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(9.4px)',
              WebkitBackdropFilter: 'blur(9.4px)',
              border: '1px solid rgba(203, 203, 203, 0.62)',
              overflow: 'hidden'
            }}
          >
          {/* Heading */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight px-2">
              Let's connect—AI news<br className="hidden md:block" />
              <span className="md:hidden"> </span>and insights from OpenxAI.
            </h2>
          </div>

          {/* Email Input Form */}
          <form onSubmit={handleSubmit} className="relative flex justify-center px-2">
            <div className="relative w-full md:w-3/4 lg:w-1/2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 md:px-6 py-3 md:py-4 pr-12 md:pr-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center transition-all duration-200 group hover:scale-110"
              >
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:opacity-80 transition-all duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
} 