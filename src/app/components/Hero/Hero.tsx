import { Button } from "../Button/Button";
import "./Hero.css";
import { FiArrowDownCircle } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export const Hero = () => {
  return (
    <section id="hero" className="hero-container h-screen ">
      <div className="grid h-full text-center">
        {/*<div className="portrait-container w-full"></div>*/}
        <div className="flex flex-col justify-center font-secondary w-full">
          <div>
            <h1 className="hero-subtext text-6xl align-middle font-bold pb-10">
              Welcome to my portfolio!
            </h1>
            <h1 className="hero-text font-bold pb-6">
              Hello, I'm <br />
              <span className="text-primary font-primary">Nilay Saxena</span>
            </h1>
            <h1 className="hero-subtitle font-bold font-primary">
              Full Stack Developer
            </h1>
          </div>
          <div className="flex mt-10 gap-5 items-center text-center justify-center">
            <div className="relative pr-10 pb-8">
              <Button
                text="_Projects"
                classes="text-2xl px-6 py-4 bg-transparent font-navbar font-bold text-primary w-fit cursor-pointer border-4 border-primary
                hover:bg-primary hover:text-black hover:border-black w-fit h-fit"
                iconPrimary={<FiArrowDownCircle />}
              />
              <img
                src="./src/assets/images/3-lines.svg"
                alt="Decorative green star"
                className="w-12 h-12 absolute bottom-0 right-0"
              />
            </div>
            <div className="pb-8 flex justify-between gap-10">
              <a
                href="https://www.github.com/Nilay611"
                target="_blank"
                className="text-[3rem] hover:text-primary"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nilaysaxena22/"
                target="_blank"
                className="text-[3rem] hover:text-primary"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./src/assets/images/arrow.svg"
        alt="Decorative green star"
        className="w-32 h-32 absolute bottom-2 left-1/2"
      />
    </section>
  );
};
