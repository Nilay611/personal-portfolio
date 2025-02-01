import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Experience } from "../../components/Experience/Experience";

export const Home = () => {
  return (
    <main className="bg-secondary">
      <div className="absolute top-20 right-0">
        <img
          src="./assets/images/pink-star.svg"
          alt="Decorative pink star"
          className="2xl:w-32 2xl:h-32 xl:w-26 xl:h-26 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 w-12 h-12 "
        />
      </div>
      <div className="absolute bottom-20 left-20">
        <img
          src="./assets/images/green-star.svg"
          alt="Decorative green star"
          className="2xl:w-32 2xl:h-32 xl:w-26 xl:h-26 lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-12 sm:h-12 w-12 h-12 "
        />
      </div>
      <div className="home-container">
        <Navbar />
        <Hero />
        <About />
        <Experience />
      </div>
    </main>
  );
};
