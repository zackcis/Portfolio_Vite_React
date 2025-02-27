import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & close icons

const navItems = [
    { name: "Home", link: "home" },
    { name: "Techstack", link: "techstack" },
    { name: "Projects", link: "projects" },
    { name: "Experience", link: "experience" },
    { name: "Contact", link: "contact" },
];

export const Header = ({ className }) => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setVisible(currentScroll < 50 || currentScroll < lastScrollY);
            setLastScrollY(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <>
            {/* Floating navbar - Desktop/Tablet only */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={clsx(
                    "hidden md:flex fixed inset-x-0 top-10 z-[100] mx-auto max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/20 bg-black px-4 py-3 shadow-lg",
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <Link
                        key={idx}
                        to={navItem.link}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        className="text-white hover:text-gray-300 transition cursor-pointer"
                    >
                        {navItem.name}
                    </Link>
                ))}
            </motion.nav>

            {/* Hamburger button - Mobile only */}
            <div className="md:hidden fixed top-5 right-5 z-[110]">
                <button
                    onClick={toggleMobileMenu}
                    className="text-white text-3xl focus:outline-none"
                >
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Fullscreen with animation and modern design */}
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: isMobileMenuOpen ? 0 : "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed inset-0 z-[100] bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center space-y-8"
            >
                {navItems.map((navItem, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="w-full text-center"
                    >
                        <Link
                            to={navItem.link}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            className="text-white text-3xl font-medium cursor-pointer transition-transform hover:scale-110"
                            onClick={() => setIsMobileMenuOpen(false)} // Close on link click
                        >
                            {navItem.name}
                        </Link>
                        <div className="w-16 h-[1px] bg-gray-600 mx-auto mt-2 opacity-50" />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};
