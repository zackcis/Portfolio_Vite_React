import { useEffect, useRef } from "react";
import { FaReact, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiJavascript, SiTailwindcss, SiMysql, SiSass, SiPostman } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Tech Stack Data
const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500  text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500  text-6xl" /> },
  { name: "SASS", icon: <SiSass className="text-pink-500  text-6xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400  text-6xl" /> },
  { name: "React", icon: <FaReact className="text-blue-500  text-6xl" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-500  text-6xl" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500  text-6xl" /> },
  { name: "SQL", icon: <PiFileSql className="text-gray-300  text-6xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700  text-6xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400  text-6xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500  text-6xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400  text-6xl" /> },
];

export const SecondSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundPosition: "200% 200%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
  
    const titleChars = titleRef.current.textContent.split("");
    titleRef.current.innerHTML = titleChars
      .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");
  
    mainTimeline.fromTo(
      ".char",
      { opacity: 0, scale: 0.5, y: () => Math.random() * 50 - 25, x: () => Math.random() * 50 - 25 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        duration: 0.4, // Much faster
        stagger: 0.015, // Faster stagger
        ease: "power2.out", // Faster ease
      }
    );
  
    itemsRef.current.forEach((item, index) => {
      if (item) {
        const angle = (index / techStack.length) * Math.PI * 2;
        const radius = 150; // Smaller radius for tighter look
        const spiralFactor = 1 - index / techStack.length;
  
        mainTimeline.fromTo(
          item,
          {
            x: Math.cos(angle) * radius * spiralFactor,
            y: Math.sin(angle) * radius * spiralFactor,
            opacity: 0,
            scale: 0.5,
            rotation: 180,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5, // Faster item animation
            ease: "power2.out", // Faster ease
            delay: 0, // No per-item delay
          },
          "-=0.3" // Slight overlap with title for speed
        );
      }
    });
  
    itemsRef.current.forEach((item) => {
      const icon = item.querySelector(".icon");
  
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(icon, { scale: 1.2, duration: 0.2, ease: "power2.out" })
        .to(item, { boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)", duration: 0.2 }, 0);
  
      item.addEventListener("mouseenter", () => hoverTl.play());
      item.addEventListener("mouseleave", () => hoverTl.reverse());
    });
  
    return () => {
      itemsRef.current.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  

  return (
    <div
      
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center  p-8 overflow-hidden bg-[#000336]"
    >
      {/* Cosmic Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[length:300%_300%]"
        // style={{
        //   backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 80%)",
        // }}
      />

      {/* Title */}
      <h2
        ref={titleRef}
        className="relative z-10 text-4xl md:text-6xl font-bold  text-white mb-16 md:mb-20  "
      >
        My Tech <span className="text-purple-600">Stack</span>
      </h2>

      {/* Tech Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 max-w-5xl">
        {techStack.map((tech, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="relative flex flex-col items-center p-4 sm:p-6 rounded-xl transition-all duration-300 bg-[rgba(255,255,255,0.05)] cursor-pointer "
          >
            <div className="icon relative z-10 flex items-center justify-center w-16 h-16">{tech.icon}</div>
            <div
              className="trail absolute inset-0 rounded-full bg-[rgba(255,255,255,0.2)] opacity-0 pointer-events-none"
              style={{ transformOrigin: "center" }}
            />
            <span className="tech-name mt-3 text-sm sm:text-base md:text-lg font-semibold text-gray-100">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};