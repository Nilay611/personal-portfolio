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
          className="w-32 h-32"
        />
      </div>
      <div className="absolute bottom-20 left-20">
        <img
          src="./assets/images/green-star.svg"
          alt="Decorative green star"
          className="w-32 h-32"
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
