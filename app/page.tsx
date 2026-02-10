'use client';
import Image from "next/image";
import HeaderNav from './headerNav';
import About from "@/components/about";
import { useState } from "react";

export default function Home() {
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const [isShrink, setIsShrink] = useState<boolean>(false);

  return (
    <main className="">
      <About isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
      <HeaderNav isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
      <div className={isShrink ? 'navBottom navBottom2' : 'navBottom'}>
        <ul>
          <div className="angle" onClick={() => setIsShrink(!isShrink)}>
            {
              !isShrink ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>
            }
          </div>
          {
            !isShrink && <>
              <li><a href="#about"><i className="fa-solid fa-circle-user"></i> About</a></li>
              <li><a href="#skills"><i className="fa-solid fa-head-side-virus"></i> Skills</a></li>
              <li><a href="#projects"><i className="fa-solid fa-lightbulb"></i> Projects</a></li>
              <li><a href="#education"><i className="fa-solid fa-graduation-cap"></i> Education</a></li>
              <li><a href="#contact"><i className="fa-solid fa-address-card"></i> Contact</a></li>
            </>
          }
          <li>
            <button onClick={() => setIsPlayed(!isPlayed)}> {isPlayed ? <><i className="fas fa-stop"></i> Stop</> : <><i className="fas fa-play"></i> Play</>}</button>
          </li>
        </ul>
      </div>
     
    </main>
  );
}
