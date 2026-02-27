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
        <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-gray-800/50 shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="hidden md:flex items-center justify-center py-6">
                    <ul className="flex gap-12 items-center">
                        {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item.toLowerCase()}`} 
                                    className="text-sm font-light text-gray-400 hover:text-white relative group transition-all duration-500 uppercase tracking-widest"
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 transition-all duration-500 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center justify-between py-5">
                    <h1 className="text-sm font-semibold text-white tracking-widest">INCENT</h1>
                    <button 
                        onClick={() => setMenu(!isMenuOpen)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-400 hover:scale-110"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
                    </button>
                </div>

                {/* Mobile Menu Items */}
                {isMenuOpen && (
                    <div className="md:hidden pb-6 border-t border-gray-800/50 animate-fade-in-up">
                        <ul className="flex flex-col gap-5 mt-6">
                            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item, i) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`} 
                                        className="block text-sm text-gray-400 hover:text-white transition-all duration-400 uppercase tracking-widest font-light"
                                        style={{animation: `fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 * (i + 1)}s forwards`, opacity: 0}}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
