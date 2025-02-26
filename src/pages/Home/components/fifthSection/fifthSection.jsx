import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import soread from "../../../../assets/images/2M_TV_logo.svg.webp";
import bookizone from "../../../../assets/images/bookizone.jpeg";
import innovatechs from "../../../../assets/images/innovatechs_cover.jpeg";
import freelance from "../../../../assets/images/free.jpg";

gsap.registerPlugin(ScrollTrigger);

const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "2M Maroc",
    thumbnail: soread,
    desc: "Developed a training management system using Laravel and JavaScript, optimizing participant tracking and request handling.",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Innovatechs",
    thumbnail: innovatechs,
    desc: "Built and deployed various SaaS solutions, focusing on scalability, performance, and client needs.",
  },
  {
    id: 3,
    title: "Front-End Developer",
    company: "Bookizone",
    thumbnail: bookizone,
    desc: "Led front-end development for an e-commerce platform, ensuring a responsive UI and smooth UX.",
  },
  {
    id: 4,
    title: "Freelancer",
    company: "Various Clients",
    thumbnail: freelance,
    desc: "Developed custom web solutions, specializing in e-commerce and interactive web applications.",
  },
];


export const FifthSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Title animation
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top", // Ensures animation resets when fully out of view
        toggleActions: "restart none none reset", // Restart on enter, reset on leave
      },
    });

    titleTl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "restart none none reset",
          },
        });

        cardTl.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: index * 0.1,
          }
        );
      }
    });

    // Cleanup: Kill timelines and ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      titleTl.kill();
      cardsRef.current.forEach((_, index) => {
        const cardTl = gsap.getById(`card-${index}`); // Optional: assign IDs if needed
        if (cardTl) cardTl.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#000336] min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 md:mb-16"
        >
          My <span className="text-purple-500">Work Experience</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {workExperience.map((experience, index) => (
            <div
              key={experience.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#2c2c5e67] rounded-xl shadow-lg p-6 md:p-8 border border-gray-800 
                         hover:scale-[1.03] hover:border-purple-500 hover:shadow-xl 
                         transition-all duration-300 flex items-start gap-4 md:gap-6 
                         cursor-pointer min-h-[220px] md:min-h-[280px] bg-opacity-90"
            >
              <img
                src={experience.thumbnail}
                alt={`${experience.company} logo`}
                className="w-14 h-14 md:w-20 md:h-20 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {experience.title}
                </h2>
                <p className="text-sm md:text-base text-gray-400 mt-1">{experience.company}</p>
                <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-2 leading-relaxed line-clamp-4">
                  {experience.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};