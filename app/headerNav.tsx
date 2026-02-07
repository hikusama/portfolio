'use client';
import { useState } from "react";

export default function HeaderNav({ isPlayed, setIsPlayed }: { isPlayed: boolean, setIsPlayed: React.Dispatch<React.SetStateAction<boolean>> }) {
    
    return (
        <nav>
            <div>
                <div className="circle circle1 bg-[#7534AA]"></div>
                <div className="line line1"></div>
                <ul>
                    <li><a href="#about"><i className="fa-solid fa-circle-user"></i> About</a></li>
                    <li><a href="#skills"><i className="fa-solid fa-head-side-virus"></i> Skills</a></li>
                    <li><a href="#projects"><i className="fa-solid fa-lightbulb"></i> Projects</a></li>
                    <li><a href="#education"><i className="fa-solid fa-graduation-cap"></i> Education</a></li>
                    <li><a href="#contact"><i className="fa-solid fa-address-card"></i> Contact</a></li>
                    <button onClick={() => setIsPlayed(!isPlayed)}> {isPlayed ? <><i className="fas fa-stop"></i> Stop</> : <><i className="fas fa-play"></i> Play</> }</button>
                </ul>
                <div className="line line2"></div>
                <div className="circle circle2"></div>
            </div>
        </nav>
    );
}