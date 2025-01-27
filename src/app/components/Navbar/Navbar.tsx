import { Navlink } from "../Navlink/Navlink";

export const Navbar = () => {
  return (
    <div className="font-marcellus_sc_regular fixed top-8 w-screen flex justify-between lg:px-48 md:px-32 sm:px-16">
      <div className="flex items-center justify-between w-full border border-gray-200 rounded-lg shadow-lg bg-white">
        <div className="logo-container flex items-center m-6">
          <a href="/" className="text-primary text-xl font-bold">
            nilay saxena
          </a>
        </div>
        <div className="text-base font-semibold flex justify-between">
          <Navlink id={1} name="About" />
          <Navlink id={2} name="Experience" />
          <Navlink id={3} name="Projects" />
          <Navlink id={4} name="Contact" />
          <Navlink id={1} name="Resume" />
        </div>
      </div>
    </div>
  );
};
