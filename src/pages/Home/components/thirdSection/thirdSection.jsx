// ThirdSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLocationArrow } from "react-icons/fa";
import "./thirdSection.css";
import { PinContainer } from "./Pin";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import khalid from '../../../../assets/images/khalidFit.png';
import ecom from '../../../../assets/images/Ecom.png';
import innovacars from '../../../../assets/images/innovacars.png';
import manage from '../../../../assets/images/manageTraining.png';
import innovatechs from '../../../../assets/images/innovatechs.png';
import final from '../../../../assets/images/1715442827539.jpeg';

const projects = [
  {
    title: "Manage training",
    description: "A full-stack application developed with Laravel and JavaScript for 2M Maroc to efficiently manage employee training programs, track sessions, and generate reports.",
    image: manage,
    date: "January 2025",
    sourceCode: 'https://github.com/zackcis/manage_training',
  },
  {
    title: "KhalidFit",
    description: "A professional website built with React.js for a Moroccan fitness champion, showcasing his coaching services, transformation programs, and client success stories.",
    image: khalid,
    sourceCode: 'https://khalid-fitness.vercel.app/',
    date: "December 2024",
  },
  {
    title: "Rental Cars Platform",
    description: "A car rental platform developed using React.js, offering users a seamless booking experience with an intuitive interface and dynamic vehicle listings.",
    image: innovacars,
    sourceCode: 'https://my-cars-eta.vercel.app/',
    date: "November 2024",
  },
  {
    title: "E-Commerce Websites",
    description: "A collection of e-commerce platforms built with React.js, designed for optimized shopping experiences, secure transactions, and user-friendly navigation.",
    image: ecom,
    sourceCode: 'https://e-commerce-websites-react-js.vercel.app/',
    date: "October 2024",
  },
  {
    title: "Innova-Techs",
    description: "Designed and developed multiple landing page sections for Innovatechs using React.js, ensuring a modern, responsive, and visually appealing interface.",
    image: innovatechs,
    sourceCode: 'https://innovatechs.vercel.app/',
    date: "September 2024",
  },
  {
    title: "Zentasks",
    description: "A full-stack web application built using Laravel as part of my final project at Lionsgeek, demonstrating backend logic, database management, and dynamic front-end features.",
    image: final,
    sourceCode: 'https://github.com/zackcis/Zakaria_Dahar_Final_Project_laravel',
    date: "August 2024",
  },
];


export const ThirdSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(card => card !== null); // Filtrer les refs null

    // Initial state: cards are hidden below with slight rotation
    gsap.set(cards, {
      opacity: 0,
      y: 100,
      rotationX: 45,
      transformOrigin: "center center",
    });

    // Animation timeline
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: {
        amount: 0, // Temps total de décalage entre les cartes
        from: "center",
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // Déclenche plus tôt pour un meilleur timing
        end: "bottom 60%",
        toggleActions: "play none none reset", // Réinitialise proprement
      },
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#000336] w-full flex flex-col items-center py-16 px-6"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          A small selection of
          <span className="text-purple-400"> recent projects</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[85%] md:flex md:flex-wrap ">
        {projects.map((project, index) => (
          <PinContainer title="Visit Project" href={project.sourceCode} key={index}>
            <div 
              ref={el => cardsRef.current[index] = el}
              className="min-w-[280px] lg:min-w-[400px]   min-h-[420px]  rounded-xl shadow-xl transition-all duration-300 p-4 relative cursor-pointer"
              onClick={() => window.open(project.sourceCode, '_blank')}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="p-5">
                <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
              </div>

              <div className="flex justify-between items-center px-5 pb-4 text-gray-400 text-sm">
                <p>{project.date}</p>
                <div  className=" text-purple-400">
                  <a className="flex justify-center items-center" href={ project.sourceCode }>

                  <p>Source code</p>
                  <FaLocationArrow className="ml-2" color="#cbacf9" />
                  </a>
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};