import { Button } from "../Button/Button";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative"
    >
      <img
        src="./assets/images/blue-stars.svg"
        alt="Decorative blue stars"
        className="w-32 h-32 absolute bottom-1/3 right-1/10"
      />
      <h1 className="text-6xl font-black text-center mb-12 font-primary">
        Get in touch
        <br />
        with me
      </h1>
      <p className="text-xl text-center max-w-3xl mb-12 leading-relaxed font-navbar">
        I am an innovative Full Stack Developer with over 2 years of experience
        in building scalable web applications using{" "}
        <span className="font-bold">ReactJS</span>,{" "}
        <span className="font-bold">Angular</span>,{" "}
        <span className="font-bold">ASP.NET Core</span>, and{" "}
        <span className="font-bold">SQL Server</span>. Experienced in designing{" "}
        <span className="font-bold">RESTful APIs</span>, streamlining backend
        architectures, and delivering high-quality solutions in{" "}
        <span className="font-bold">Agile</span> environments. If you're
        interested in my work and experience, please don't hesitate to reach out
        to me!
      </p>
      <Button
        classes="bg-primary text-black px-8 py-3 text-xl font-navbar font-bold cursor-pointer
        border-4 border-black"
        text="{...Contact me}"
      />
      <img
        src="./assets/images/squiggly-line.svg"
        alt="Squiggly line"
        className="w-32 h-32 absolute top-1/3 left-1/10"
      />
    </section>
  );
};
