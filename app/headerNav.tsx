'use client';
import { useEffect, useState } from "react";

export default function HeaderNav({ isPlayed, setIsPlayed }: { isPlayed: boolean, setIsPlayed: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenu] = useState(false);

    const handleMenu = () => {
        console.log(isMenuOpen);

        setMenu(!isMenuOpen);
    }


    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.scrollTo(0, 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <nav className={scrolled ? 'psx scrolled z-40' : 'psx z-40'}>
            <div className="desktop-mode">
                <div className="circle circle1 bg-[#7534AA]"></div>
                <div className="line line1"></div>
                <ul>
                    <li><a href="#about"><i className="fa-solid fa-circle-user"></i> About</a></li>
                    <li><a href="#skills"><i className="fa-solid fa-head-side-virus"></i> Skills</a></li>
                    <li><a href="#projects"><i className="fa-solid fa-lightbulb"></i> Projects</a></li>
                    <li><a href="#education"><i className="fa-solid fa-graduation-cap"></i> Education</a></li>
                    <li><a href="#contact"><i className="fa-solid fa-address-card"></i> Contact</a></li>
                    <button onClick={() => setIsPlayed(!isPlayed)}> {isPlayed ? <><i className="fas fa-stop"></i> Stop</> : <><i className="fas fa-play"></i> Play</>}</button>
                </ul>
                <div className="line line2"></div>
                <div className="circle circle2"></div>
            </div>
            <div className="handy-mode">
                <h1><span>R</span>amillano, <span>I</span>ncent</h1>
                <button type="button" className="showmenu" title="Open menu" onClick={handleMenu}>
                    {
                        isMenuOpen ? <i className="fa-solid fa-xmark"></i> :
                            <i className="fa fa-bars"></i>
                    }
                </button>
            </div>
            {
                isMenuOpen &&
                <div className="menu-list">
                    <div><i className="fa-solid fa-link"></i> Connect With Me</div>
                    <ul className="social-list">
                        <li className="email-item">
                            <i className="fas fa-envelope"></i>
                            <span>ramillano.incent@gmail.com</span>
                        </li>
                        <li>
                            <a href="https://github.com/hikusama" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                                <span>GitHub</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/ramillano-incent-e-a5b0a5338/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://leetcode.com/u/hikusama/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-code"></i>
                                <span>LeetCode</span>
                            </a>
                        </li>
                    </ul>
                    <div className="cme">
                        <button onClick={() => window.location.href = "tel:09108904619"}>
                            <i className="fa-solid fa-phone-volume"></i> Call me!!
                        </button>
                    </div>
                </div>
            }

        </nav>
    );
}