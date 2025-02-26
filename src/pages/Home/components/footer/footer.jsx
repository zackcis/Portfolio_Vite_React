import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

const links = {
  ownerEmail: "zakaria.eldahar@gmail.com",
};

const socialMedia = [
  { name: "Linkedin", link: "https://www.linkedin.com/in/zakaria-eldahar/", img: <AiOutlineLinkedin size={24} /> },
  { name: "GitHub", link: "https://github.com/zackcis", img: <VscGithub size={24} /> },
];

export const Footer = () => {
  return (
    <footer className="magicpattern relative w-full bg-[#000336] px-6 py-10 md:py-14">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
          Ready to take <span className="text-purple-500">your</span> digital presence to the next level?
        </h1>
        <p className="mt-4 text-gray-300 text-sm sm:text-base md:mt-6 max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a
          href={`mailto:${links.ownerEmail}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 md:mt-8 flex items-center gap-2 px-5 py-3 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          <FaLocationArrow size={20} />
          <span>Let's get in touch</span>
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 md:mt-16 flex flex-col items-center gap-6 md:flex-row md:justify-between text-white text-center md:text-left">
        <p className="text-xs sm:text-sm md:text-base font-light">
          Copyright &copy; {new Date().getFullYear()} | {" "}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600"
          >
            ZAKARIA DAHAR
          </a>
        </p>
        <div className="flex items-center gap-4 sm:gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center rounded-lg border border-gray-600 bg-gray-800 bg-opacity-75 backdrop-blur-lg transition hover:bg-gray-700"
              title={profile.name}
            >
              {profile.img}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
