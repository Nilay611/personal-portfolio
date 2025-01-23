import { Navlink } from "../Navlink/Navlink";

export const Navbar = () => {
  return (
    <div className="font-marcellus_sc_regular fixed top-8 w-screen flex justify-between lg:px-64 md:px-32 sm:px-16">
      <div className="logo-container flex items-center m-6">
        <img
          className="w-10 h-10"
          src="./src/assets/images/logo.png"
          alt="logo"
        />
      </div>

      <div className="text-base font-semibold flex justify-between">
        <Navlink id={1} name="About" />
        <Navlink id={2} name="Experience" />
        <Navlink id={3} name="Projects" />
        <Navlink id={4} name="Contact" />
        <Navlink id={1} name="Resume" />
      </div>
    </div>
  );
};
