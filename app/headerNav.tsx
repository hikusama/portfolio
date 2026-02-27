'use client';
import { useEffect, useState } from "react";

export default function HeaderNav({ isPlayed, setIsPlayed }: { isPlayed: boolean, setIsPlayed: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.scrollTo(0, 0);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-600 ${scrolled ? 'scrolled' : ''}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="hidden md:flex items-center justify-center py-5">
                    <ul className="flex gap-8 items-center">
                        <li><a href="#about" className="text-sm font-light hover:text-white transition-colors duration-400">About</a></li>
                        <li><a href="#skills" className="text-sm font-light hover:text-white transition-colors duration-400">Skills</a></li>
                        <li><a href="#projects" className="text-sm font-light hover:text-white transition-colors duration-400">Projects</a></li>
                        <li><a href="#education" className="text-sm font-light hover:text-white transition-colors duration-400">Education</a></li>
                        <li><a href="#contact" className="text-sm font-light hover:text-white transition-colors duration-400">Contact</a></li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center justify-between py-4">
                    <h1 className="text-base font-semibold">Incent Ramillano</h1>
                    <button 
                        onClick={() => setMenu(!isMenuOpen)}
                        className="w-8 h-8 flex items-center justify-center text-[#e8e8e8] hover:text-[#ffffff] transition-colors duration-400"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {/* Mobile Menu Items */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-[#262626] animate-in fade-in duration-300">
                        <ul className="flex flex-col gap-3 mt-4">
                            <li><a href="#about" className="block text-sm text-[#d0d0d0] hover:text-white transition-colors duration-400">About</a></li>
                            <li><a href="#skills" className="block text-sm text-[#d0d0d0] hover:text-white transition-colors duration-400">Skills</a></li>
                            <li><a href="#projects" className="block text-sm text-[#d0d0d0] hover:text-white transition-colors duration-400">Projects</a></li>
                            <li><a href="#education" className="block text-sm text-[#d0d0d0] hover:text-white transition-colors duration-400">Education</a></li>
                            <li><a href="#contact" className="block text-sm text-[#d0d0d0] hover:text-white transition-colors duration-400">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
