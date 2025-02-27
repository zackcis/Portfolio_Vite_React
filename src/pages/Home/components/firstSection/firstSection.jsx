    import { useState, useEffect } from 'react';
    import { Header } from '../../../../layouts/header';
    import { Link } from "react-scroll"; // Import Link from react-scroll



    export const FirstSection = () => {
        const [isVisible, setIsVisible] = useState(false);
        const [isLoaded, setIsLoaded] = useState(false);
        const [visible, setVisible] = useState(true);

        useEffect(() => {
            // Trigger initial animation
            setIsVisible(true);
            // Trigger loaded state for secondary animations
            setTimeout(() => setIsLoaded(true), 100);
        }, []);

        const [lastScrollY, setLastScrollY] = useState(0);

        useEffect(() => {
            const handleScroll = () => {
                const currentScroll = window.scrollY;
                setVisible(currentScroll < 50 || currentScroll < lastScrollY);
                setLastScrollY(currentScroll);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScrollY]);

        return (
            <section className="magicpattern flex flex-col bg-slate-900 overflow-hidden">
                <Header />
                {/* Animated background gradient */}
                <div
                    className={`
                        
                        absolute inset-0 
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}
                    `}
                />

                {/* Animated dots pattern overlay */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`
                                absolute w-2 h-2 bg-purple-400 rounded-full
                                transition-all duration-1000 ease-out
                                ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
                            `}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transitionDelay: `${800 + i * 150}ms`,
                                animation: 'float 8s infinite ease-in-out'
                            }}
                        />
                    ))}
                </div>

                {/* Main content */}
                <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:py-20 lg:py-28">
                    {/* Subtitle with split-letter animation */}
                    <h2 className="overflow-hidden text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-widest text-blue-100 font-bold mt-10 sm:mt-12">
                        {"Crafting Seamless Digital Solutions".split('').map((char, i) => (
                            <span
                                key={i}
                                className={`
                                    inline-block transition-all duration-500
                                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                                `}
                                style={{
                                    transitionDelay: `${i * 30}ms`,
                                    animation: isLoaded ? `pulse 5s infinite ${i * 100}ms` : 'none'
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </h2>

                    {/* Main title with reveal effect */}
                    <h1
                        className={`
                            relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                            font-bold text-white max-w-[90%] sm:max-w-[75%] 
                            md:max-w-[60%] leading-tight mt-6
                            transition-all duration-1000 transform
                            ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
                        `}
                        style={{ transitionDelay: '500ms' }}
                    >
                        Building Scalable Web Applications with{' '}
                        <span
                            className={`
                                relative inline-block
                                transition-all duration-1000
                                ${isLoaded ? 'text-purple-400' : 'text-white'}
                            `}
                            style={{
                                transitionDelay: '1000ms',
                                animation: isLoaded ? 'shimmer 3s infinite' : 'none'
                            }}
                        >
                            Performance & Aesthetics
                            <div className={`
                                absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                transition-transform duration-1000
                                ${isLoaded ? 'translate-x-full' : '-translate-x-full'}
                            `}
                                style={{ animation: isLoaded ? 'shimmerSlide 3s infinite' : 'none' }}
                            />
                        </span>
                    </h1>

                    {/* Description with stagger fade */}
                    <p
                        className={`
                            text-sm sm:text-base md:text-lg lg:text-xl 
                            max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[55%] 
                            text-white/90 mt-6 transition-all duration-700
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}
                        style={{ transitionDelay: '700ms' }}
                    >
                        Hi, I&apos;m <strong className="text-blue-300">Zakaria Dahar</strong>, a Full-Stack Web Developer specializing in
                        <strong className="text-purple-400"> React, Laravel with experience in UX/UI Design</strong>, based in Morocco. Passionate about
                        delivering high-performance web solutions.
                    </p>

                    {/* Button with hover effects */}
                    <Link className='' to="projects">

                        <button

                            className={`
                                cursor-pointer
                            group relative mt-8 sm:mt-10
                            px-6 sm:px-8 py-3 sm:py-4 
                            text-white font-medium text-sm sm:text-base
                            overflow-hidden rounded-full
                            transition-all duration-500
                            hover:shadow-lg hover:shadow-purple-500/30
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}
                            style={{ transitionDelay: '100ms' }}
                            // onClick={() => window.location.href = ''}
                        >
                            {/* Button background with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 transition-transform duration-300 group-hover:scale-105" />

                            {/* Button content */}
                            <span className="relative flex items-center gap-2">

                                Show My Work
                                <svg
                                    className="w-4 h-4  transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>

                            {/* Animated shine effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full"
                                style={{ animation: isLoaded ? 'shimmerButton 3s infinite' : 'none' }}
                            />
                        </button>
                    </Link>
                </div>

                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0) }
                        50% { transform: translateY(-20px) }
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.7; }
                    }
                    @keyframes shimmer {
                        0% { opacity: 1; }
                        50% { opacity: 0.7; }
                        100% { opacity: 1; }
                    }
                    @keyframes shimmerSlide {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    @keyframes shimmerButton {
                        0% { transform: translateX(-100%) skewX(-12deg); }
                        100% { transform: translateX(200%) skewX(-12deg); }
                    }
                `}</style>
            </section>
        );
    };

