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
      <div className="about-container relative z-0">
        <div className="absolute top-0" id="about"></div>

        <div className="about relative z-20 pt-32">
          <div className="abt-main-cont flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 lg:px-16 max-w-6xl mx-auto">
            {/* Profile Section */}
            <div className="prpart-cont flex-shrink-0">
              <div className="profile-wrapper group cursor-pointer">
                <div 
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-64 h-64 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#262626] hover:border-[#404040] transition-all duration-700"
                >
                  <video
                    ref={profileVideoRef}
                    loop
                    playsInline
                    src="/videos/profile.mp4"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="infpart-cont flex-1 flex flex-col justify-center">
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                  Incent Ramillano
                </h1>
                <p className="text-lg text-[#909090] font-light">Full Stack Developer</p>
              </div>

              <p className="text-[#d0d0d0] leading-relaxed mb-8 max-w-2xl text-sm lg:text-base">
                I build things on the web. React, Laravel, Flutter, Next.js. I understand that most projects fail, but I try anyway. 
                Perhaps something I create will last longer than my attention span.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="border border-[#262626] rounded-lg p-4 hover:border-[#404040] transition-all duration-500">
                  <p className="text-2xl font-bold text-[#ffffff]">4+</p>
                  <p className="text-xs text-[#909090] mt-1">Projects</p>
                </div>
                <div className="border border-[#262626] rounded-lg p-4 hover:border-[#404040] transition-all duration-500">
                  <p className="text-2xl font-bold text-[#ffffff]">1+</p>
                  <p className="text-xs text-[#909090] mt-1">Years</p>
                </div>
                <div className="border border-[#262626] rounded-lg p-4 hover:border-[#404040] transition-all duration-500">
                  <p className="text-2xl font-bold text-[#ffffff]">∞</p>
                  <p className="text-xs text-[#909090] mt-1">Bugs Fixed</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-xs text-[#909090] uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Laravel', 'Flutter', 'TypeScript', 'MySQL'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 text-xs bg-[#1a1a1a] border border-[#262626] rounded-full text-[#d0d0d0] hover:bg-[#262626] transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://github.com/hikusama" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#262626] rounded-lg text-[#909090] hover:text-[#ffffff] hover:border-[#404040] transition-all duration-500"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ramillano-incent-e-a5b0a5338/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#262626] rounded-lg text-[#909090] hover:text-[#ffffff] hover:border-[#404040] transition-all duration-500"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-lg"></i>
                </a>
                <a 
                  href="https://leetcode.com/u/hikusama/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#262626] rounded-lg text-[#909090] hover:text-[#ffffff] hover:border-[#404040] transition-all duration-500"
                  title="LeetCode"
                >
                  <i className="fa-solid fa-code text-lg"></i>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="/files/Incent_Ramillano_Resume.pdf" 
                  target="_blank"
                  className="px-6 py-3 bg-[#ffffff] text-[#0a0a0a] rounded-lg font-medium hover:bg-[#e8e8e8] transition-all duration-500 flex items-center justify-center gap-2 text-sm"
                >
                  <i className="fas fa-download"></i>
                  Resume
                </a>
                <a 
                  href="mailto:ramillano.incent@gmail.com"
                  className="px-6 py-3 bg-transparent border border-[#404040] text-[#d0d0d0] rounded-lg font-medium hover:border-[#ffffff] hover:text-[#ffffff] transition-all duration-500 flex items-center justify-center gap-2 text-sm"
                >
                  <i className="fas fa-envelope"></i>
                  Contact
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
