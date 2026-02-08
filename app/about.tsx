"use client";

import Lightning from '@/components/Lightning';
import { useEffect, useRef, useState } from 'react';

export default function About({ isPlayed, setIsPlayed }: { isPlayed: boolean, setIsPlayed: React.Dispatch<React.SetStateAction<boolean>> }) {
  const profileVideoRef = useRef<HTMLVideoElement | null>(null);
  const hitlerVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isAllSet, setAllSet] = useState<boolean>(false);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const startAnimation = () => {
    if (!targetRef.current || !loaderRef.current) return;

    const target = targetRef.current.getBoundingClientRect();
    const loader = loaderRef.current;

    loader.style.opacity = "1";
    loader.style.pointerEvents = "auto";
    loader.style.transform = "translate(-50%, -50%)";

    loader.getBoundingClientRect();

    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    const targetCenterX = target.left + target.width / 2;
    const targetCenterY = target.top + target.height / 2;

    const deltaX = targetCenterX - viewportCenterX;
    const deltaY = targetCenterY - viewportCenterY;

    loader.style.transition = "transform 0.8s ease-in-out, opacity 0.5s ease";
    loader.style.transform = `translate(calc(-50% + ${deltaX + 7}px), calc(-50% + ${deltaY}px))`;

    setTimeout(() => {
      // loader.style.opacity = "0";
      // loader.style.pointerEvents = "none";
      document.body.style.overflow = 'visible'
      document.body.style.height = 'unset'
      setLoading(false)
    }, 1000);
  };
  const texts = ["Hi There!, Its me Hikusama!", "I'm a Full Stack Developer", "I can do Mobile App too.", "BTW..", "Do you hate burat bevelopers?", "Matik..."];
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 70;
    const pauseAfterText = 1500;

    if (textIndex >= texts.length) return;

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + texts[textIndex][charIndex]);
      setCharIndex((prev) => prev + 1);
    }, typingSpeed);

    if (charIndex === texts[textIndex].length) {
      clearInterval(interval);
      setTimeout(() => {
        setDisplayed("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseAfterText);
    }

    return () => clearInterval(interval);
  }, [charIndex, textIndex, texts]);
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll("img")) as HTMLImageElement[];
    const vids = Array.from(document.querySelectorAll("video")) as HTMLVideoElement[];
    let loadedCount = 0;
    const totalAssets = imgs.length + vids.length;

    if (totalAssets === 0) {
      setTimeout(() => {
        setAllSet(true)
      }, 5000);
      return;
    }

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === totalAssets) {
        setTimeout(() => {
          setAllSet(true)
        }, 5000);
      }
    };

    imgs.forEach(img => {
      if (img.complete) {
        checkAllLoaded();
      } else {
        img.addEventListener("load", checkAllLoaded, { once: true });
        img.addEventListener("error", checkAllLoaded, { once: true });
      }
    });

    vids.forEach(video => {
      if (video.readyState >= 3) {
        checkAllLoaded();
      } else {
        video.addEventListener("canplaythrough", checkAllLoaded, { once: true });
        video.addEventListener("error", checkAllLoaded, { once: true });
      }
    });

    const hitlerVideo = hitlerVideoRef.current;
    if (hitlerVideo) {
      const handleEnded = () => {
        setIsPlayed(false);
        hitlerVideo.currentTime = 0;
        hitlerVideo.pause();
      };
      hitlerVideo.addEventListener("ended", handleEnded);

      return () => {
        hitlerVideo.removeEventListener("ended", handleEnded);
        imgs.forEach(img => {
          img.removeEventListener("load", checkAllLoaded);
          img.removeEventListener("error", checkAllLoaded);
        });
        vids.forEach(video => {
          video.removeEventListener("canplaythrough", checkAllLoaded);
          video.removeEventListener("error", checkAllLoaded);
        });
      };
    }
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
    <>
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
                <div className="wrp wrpo" id="orgPosition" ref={targetRef}>
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
      <div id="loadingScreen" style={{ display: isLoading ? 'block' : 'none' }}>
        <div className="prr">
          <div className="wrp" ref={loaderRef}>
            <div className="bordered-me">
              <video
                loop
                playsInline
                autoPlay
                muted
                src="/videos/profile.mp4"
              />
            </div>
            <img
              src="/images/Ellipse.png"
              alt="Ellipse"
            />
          </div>
          <h1>
            {displayed}
            <span className="cursor">|</span>
          </h1>
        </div>
        {
          !isAllSet ?
            <div className="loadingR">
              <i className="fas fa-spinner fa-spin"></i> Fetching all resources...
            </div>
            :
            <div className="proceed">
              <button onClick={startAnimation} type='button'>Proceed <i className="fas fa-arrow-right"></i></button>
            </div>
        }
      </div>
    </>

  );
}