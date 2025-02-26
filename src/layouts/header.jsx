import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-scroll"; // Import Link from react-scroll

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
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={clsx(
                "fixed inset-x-0 top-10 z-[100] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/20 bg-black px-4 py-3 shadow-lg",
                className
            )}
        >
            {navItems.map((navItem, idx) => (
                <Link
                    key={idx}
                    to={navItem.link} // Target section ID
                    smooth={true} // Enables smooth scrolling
                    duration={500} // Adjust scroll speed (ms)
                    spy={true} // Highlights active link
                    offset={-70} // Adjusts for navbar height
                    className="text-white hover:text-gray-300 transition cursor-pointer"
                >
                    {navItem.name}
                </Link>
            ))}
        </motion.nav>
    );
};
