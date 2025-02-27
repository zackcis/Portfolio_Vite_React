import React from "react";
import hamza from "../../../../assets/images/Hamoza.jpeg";
import achraf from "../../../../assets/images/achrafo.jpeg";
import khalid from "../../../../assets/images/khalid.jpeg";
import ecom from "../../../../assets/images/hijabi.webp";
import { motion } from "framer-motion";


const testimonials = [
    {
        id: 1,
        name: "Hamza",
        role: "Software Developer",
        image: hamza,
        text: "Zakaria consistently delivers clean, efficient code at Innovatechs. His strong problem-solving skills and teamwork make him a valuable asset to our development crew.",
    },
    {
        id: 2,
        name: "Achraf",
        role: "Full-Stack Developer & Mechanical engineer",
        image: achraf,
        text: "Zakaria's dedication to quality and innovation at Innovatechs is truly inspiring. He tackles challenges head-on with effective solutions that elevate our projects.",
    },
    {
        id: 3,
        name: "Khalid",
        role: "Bodybuilding Coach",
        image: khalid,
        text: "Zakaria built my coaching website, and I couldn’t be happier. The design is professional, user-friendly, and exactly what I needed to grow my business online. Highly recommended!",
    },
    {
        id: 4,
        name: "E-Commerce Client",
        role: "Business Owner",
        image: ecom,
        text: "Zakaria developed my eCommerce platform, and the results exceeded my expectations. The site is fast, secure, and easy to navigate, making it a great experience for my customers.",
    }
];



// Extend testimonials for infinite scrolling (6x to ensure smooth looping across wide screens)
const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

export const FourthSection = () => {
    // Calculate animation duration based on number of items for smooth looping
    const scrollDuration = repeatedTestimonials.length * 5; // 2 seconds per card

    return (
        <section className="bg-[#000336] py-8 md:py-16 overflow-hidden relative  flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8 md:mb-12 text-center px-4 max-w-4xl">
                Kind words from my 
                <span className="text-purple-400 "> clients</span> &
                <span className="text-purple-400"> Innovatechs</span> team members
            </h1>
            <div className="relative w-full overflow-hidden flex justify-center  md:py-10">
                <motion.div
                    className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10"
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }} // Move halfway for infinite loop with doubled content
                    transition={{
                        repeat: Infinity,
                        duration: scrollDuration, // Dynamic duration for smooth scroll
                        ease: "linear",
                    }}
                    style={{ width: `${repeatedTestimonials.length * 100}%` }} // Ensure full width for all cards
                >
                    {repeatedTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            className="bg-[#2c2c5e67] text-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700 w-[80vw] sm:w-[50vw] md:w-[40vw]  min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[300px] flex-shrink-0 flex flex-col justify-between items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 italic leading-relaxed line-clamp-3">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-purple-400 object-cover"
                                />
                                <div>
                                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};