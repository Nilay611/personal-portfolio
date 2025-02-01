import { Button } from "../Button/Button";
//import "./Hero.css";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section id="hero" className="hero-container h-screen pt-10">
      <div className="grid h-full text-center">
        {/*<div className="portrait-container w-full"></div>*/}
        <div className="flex flex-col justify-center font-secondary w-full z-1">
          <h1 className="hero-subtext align-middle font-bold 2xl:text-[65px] xl:text-[55px] lg:text-[45px] md:text-[35px] sm:text-[25px] text-[25px]">
            Welcome to my portfolio!
          </h1>
          <h1 className="hero-text font-bold 2xl:text-[65px] xl:text-[55px] lg:text-[45px] md:text-[35px] sm:text-[25px] text-[25px]">
            Hello, I'm <br />
            <span className="text-primary font-primary 2xl:text-[125px] xl:text-[110px] lg:text-[95px] md:text-[80px] sm:text-[65px] text-[45px]">
              Nilay Saxena
            </span>
          </h1>
          <h1 className="hero-subtitle font-bold font-primary 2xl:text-[65px] xl:text-[55px] lg:text-[45px] md:text-[35px] sm:text-[25px] text-[25px]">
            Full Stack Developer
          </h1>
          <div className="flex flex-col sm:flex-row mt-10 gap-10 items-center text-center justify-center">
            <div className="relative">
              <Button
                text="_Projects"
                classes="lg:text-lg md:text-md sm:text-sm text-sm lg:px-6 md:px-4 sm:px-2 lg:py-4 md:py-3 sm:py-2 px-2 py-2 bg-transparent font-navbar font-bold 
                text-primary w-fit cursor-pointer border-4 border-primary hover:bg-primary hover:text-black hover:border-black w-fit h-fit"
                iconPrimary={<FiArrowDownCircle />}
              />
              <img
                src="./assets/images/3-lines.svg"
                alt="Three lines"
                className="md:w-16 md:h-16 sm:w-12 sm:h-12 w-12 h-12 absolute -bottom-10 -right-10 md:-right-12
                "
              />
            </div>
            <div className="flex justify-between gap-10">
              <a
                href="https://www.github.com/Nilay611"
                target="_blank"
                className="text-[2rem] md:text-[3rem] hover:text-primary"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nilaysaxena22/"
                target="_blank"
                className="text-[2rem] md:text-[3rem] hover:text-primary"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/images/arrow.svg"
        alt="Downwards arrow"
        className="2xl:w-24 2xl:h-24 xl:w-22 xl:h-22 lg:w-20 lg:h-20 md:w-18 md:h-18 sm:w-16 sm:h-16 absolute bottom-2 left-1/2"
      />
    </section>
  );
};
