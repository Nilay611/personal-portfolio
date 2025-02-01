import { Button } from "../Button/Button";
import { Navlink } from "../Navlink/Navlink";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirectOrScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="font-navbar fixed top-4 w-screen flex justify-between 2xl:px-32 xl:px-16 lg:px-8 md:px-4 sm:px-2 z-50 lg:visible invisible">
      <div className="flex items-center justify-between w-full border-4 border-black bg-white/70 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(75,75,75,1)] rounded-none">
        <div className="logo-container flex items-center 2xl:m-6 xl:m-5 lg:m-4 md:m-3 sm:m-2">
          <div
            className="text-primary 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm font-bold cursor-pointer"
            onClick={() => redirectOrScrollToTop()}
          >
            {">>"}Nilay Saxena💡
          </div>
        </div>
        <div className="lg:text-lg md:text-md sm:text-sm font-bold flex justify-between">
          <Navlink id={1} name="<About/>" />
          <Navlink id={2} name="//Experience" />
          <Navlink id={3} name="_Projects" />
          <Navlink id={4} name="{Contact}" />
          <div className="border-l-4 border-black">
            <Button
              classes="w-fit h-fit lg:my-4 md:my-3 sm:my-2 lg:mx-8 md:mx-6 sm:mx-2 lg:px-6 md:px-4 sm:px-2 lg:py-2 sm:py-1 bg-primary 
              font-navbar font-bold text-white w-fit cursor-pointer border-4 border-primary hover:text-black hover:border-black
              lg:text-lg md:text-md sm:text-sm"
              text="Resume"
              iconSecondary={<FaArrowUpRightFromSquare />}
              hrefType="link"
              href="https://1drv.ms/b/c/849798f71024a08d/EY_djjZWlldEuoAJfDZWGsYBKbXwILwv0hLkXRaVOBTURw?e=PU9xGQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
