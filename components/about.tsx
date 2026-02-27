"use client";

import { useEffect, useRef, useState } from 'react';

export default function About({ isPlayed, setIsPlayed }: { isPlayed: boolean, setIsPlayed: React.Dispatch<React.SetStateAction<boolean>> }) {
  const profileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.classList.add("loading");
    setTimeout(() => {
      document.body.classList.remove("loading");
      setLoading(false)
    }, 1500);
  }, []);

  const handleMouseEnter = () => {
    profileVideoRef.current?.play().catch(() => { });
  };

  const handleMouseLeave = () => {
    if (profileVideoRef.current) {
      profileVideoRef.current.pause();
      profileVideoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div className="about-container relative z-0 overflow-hidden">
        <div className="absolute top-0" id="about"></div>

        <div className="about relative z-20 py-24 lg:py-32">
          <div className="abt-main-cont flex flex-col lg:flex-row gap-16 lg:gap-28 px-6 lg:px-20 max-w-7xl mx-auto">
            {/* Profile Section */}
            <div className="prpart-cont flex-shrink-0 animate-fade-in-up">
              <div className="profile-wrapper group cursor-pointer relative">
                {/* Glow effect background */}
                <div className="absolute -inset-3 bg-gradient-to-br from-gray-600/20 via-gray-700/10 to-gray-900/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-1000 -z-10"></div>
                
                <div 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700 group-hover:border-gray-500 transition-all duration-800 shadow-2xl group-hover:shadow-2xl group-hover:shadow-gray-500/20"
                >
                  <video
                    ref={profileVideoRef}
                    loop
                    playsInline
                    src="/videos/profile.mp4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="infpart-cont flex-1 flex flex-col justify-center">
              <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.15s'}}>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                  Incent Ramillano
                </h1>
                <p className="text-2xl text-gray-400 font-light tracking-wide">Full Stack Developer</p>
              </div>

              <p className="text-gray-300 leading-relaxed mb-12 max-w-2xl text-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                I build things on the web. React, Laravel, Flutter, Next.js. I understand that most projects fail, but I try anyway. 
                Perhaps something I create will last longer than my attention span.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-5 mb-14 animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                {[
                  { value: '4+', label: 'Projects' },
                  { value: '1+', label: 'Years' },
                  { value: '∞', label: 'Bugs Fixed' }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="group/stat border border-gray-700 rounded-xl p-6 hover:border-gray-500 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-gray-400/10 hover:-translate-y-1"
                    data-stagger={i + 1}
                  >
                    <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-5">Featured Tech Stack</p>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Laravel', 'Flutter', 'TypeScript', 'MySQL'].map((tech, i) => (
                    <span 
                      key={tech}
                      className="px-5 py-2.5 text-sm bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900 transition-all duration-500 backdrop-blur-sm cursor-default hover:shadow-md hover:shadow-gray-400/10 hover:-translate-y-0.5"
                      data-stagger={i + 1}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mb-10 animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                {[
                  { icon: 'fa-github', url: 'https://github.com/hikusama', label: 'GitHub' },
                  { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/ramillano-incent-e-a5b0a5338/', label: 'LinkedIn' },
                  { icon: 'fa-code', url: 'https://leetcode.com/u/hikusama/', label: 'LeetCode' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm hover:shadow-lg hover:shadow-gray-400/10 hover:-translate-y-1"
                    title={social.label}
                  >
                    <i className={`fa-brands ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <a 
                  href="/files/Incent_Ramillano_Resume.pdf" 
                  target="_blank"
                  className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl hover:shadow-white/20 transition-all duration-500 flex items-center justify-center gap-2 text-sm tracking-wide hover:-translate-y-1"
                >
                  <i className="fas fa-download text-sm"></i>
                  Download Resume
                </a>
                <a 
                  href="mailto:ramillano.incent@gmail.com"
                  className="px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-white hover:text-white hover:bg-white/5 hover:shadow-lg hover:shadow-gray-400/10 transition-all duration-500 flex items-center justify-center gap-2 text-sm tracking-wide hover:-translate-y-1"
                >
                  <i className="fas fa-envelope text-sm"></i>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-12 h-12 border-2 border-[#262626] border-t-[#ffffff] rounded-full animate-spin"></div>
            </div>
            <p className="text-[#909090] text-sm">Initializing...</p>
          </div>
        </div>
      )}
    </>
  );
}
