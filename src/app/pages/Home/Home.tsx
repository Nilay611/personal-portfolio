import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";

export const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
};
