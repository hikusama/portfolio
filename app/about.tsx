"use client";

import Lightning from '@/components/Lightning';
import { useEffect, useRef, useState } from 'react';

export default function About({ isPlayed, setIsPlayed }: { isPlayed: boolean, setIsPlayed: React.Dispatch<React.SetStateAction<boolean>> }) {
  const profileVideoRef = useRef<HTMLVideoElement | null>(null);
  const hitlerVideoRef = useRef<HTMLVideoElement | null>(null);

  // const [isPlayed, setIsPlayed] = useState<boolean>(false);

  useEffect(() => {
    const video = hitlerVideoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlayed(false);
      video.currentTime = 0;
      video.pause();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const hitlerVideo = hitlerVideoRef.current;
    if (!hitlerVideo) return;

    if (isPlayed) {
      hitlerVideo.currentTime = 0;
      hitlerVideo.play().catch(() => { });
    } else {
      hitlerVideo.pause();
      hitlerVideo.currentTime = 0;
    }

    const handleEnded = () => setIsPlayed(false);
    hitlerVideo.addEventListener("ended", handleEnded);

    return () => hitlerVideo.removeEventListener("ended", handleEnded);
  }, [isPlayed]);

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
    <div className="about-container relative z-0">
      <div className="absolute top-0 hidden" id="about"></div>
      <div id='backlight' >
        {
          isPlayed && <Lightning
            hue={273}
            xOffset={0}
            speed={0.2}
            intensity={1}
            size={0.5}
          />
        }
      </div>

      <div className="about relative z-20">

        <div className="abt-main-cont">
          <div className="prpart-cont">
            <div className="outer-eye">
              <div className="wrp">

                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="bordered-me"
                  style={{ display: !isPlayed ? "block" : "none", }}

                >
                  <video
                    ref={profileVideoRef}
                    loop
                    playsInline
                    src="/videos/profile.mp4"
                  />
                </div>
                <img
                  style={{ display: !isPlayed ? "block" : "none", }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  src="/images/Ellipse.png"
                  alt="Ellipse"
                />

                <div className="bordered-me"
                  style={{ display: isPlayed ? "block" : "none", }}>
                  <video
                    ref={hitlerVideoRef}
                    src="/videos/hitler.mp4"
                    playsInline
                  />
                </div>
                <img
                  style={{ display: isPlayed ? "block" : "none", }}
                  src="/images/Ellipse.png" alt="Ellipse" />

              </div>
            </div>
          </div>

          <div className="infpart-cont">
            <div className="title-and-rate">
              <div className="work">
                <div></div>
                <h3>
                  Full Stack <span className="text-[#7534AA]">Developer</span>
                </h3>
              </div>
              <div className="rate *:flex *:flex-col *:text-center *:gap-0 flex gap-10">
                <div>
                  <p>97<span>%</span></p>
                  <p>Success Rate</p>
                </div>
                <div>
                  <p>4<span>+</span></p>
                  <p>Projects</p>
                </div>
                <div>
                  <p>1<span>Y</span></p>
                  <p>Experience</p>
                </div>
              </div>
            </div>

            <div className="content mt-1 mb-1">
              <h1>
                <span>R</span>amillano, <span>I</span>ncent
              </h1>
              <p>I Hate Burat-Developers.</p>
            </div>

            <div className="stacks">
              <div><img src="/images/react.png" alt="" /><p>React</p></div>
              <div><img src="/images/larav.png" alt="" /><p>Laravel</p></div>
              <div><img src="/images/flutter.png" alt="" /><p>Flutter</p></div>
              <div><img style={{ borderRadius: "50%" }} src="/images/nextjs.png" alt="" /><p>Next.js</p></div>
              <div><img src="/images/mysql.png" alt="" /><p>MySQL</p></div>
              <div><img src="/images/html.png" alt="" /><p>HTML</p></div>
              <div><img src="/images/css.png" alt="" /><p>CSS</p></div>
              <div><img src="/images/js.png" alt="" /><p>JavaScript</p></div>
            </div>


            <div className="social3">
              <a title="linkedIn" href="https://www.linkedin.com/in/ramillano-incent-e-a5b0a5338/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a title="github" href="https://github.com/hikusama" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a title="leetcode" href="https://leetcode.com/u/hikusama/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-code"></i>
              </a>
            </div>

            <div className="actions-main">
              <div id="dlresume">
                <i className="fas fa-download"></i>
                <a href="/files/Incent_Ramillano_Resume.pdf" target="_blank"> Download Resume</a>
              </div>
              <div id="getintouch">
                <i className="fas fa-envelope"></i>
                <a href="mailto:ramillano.incent@gmail.com"> Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}