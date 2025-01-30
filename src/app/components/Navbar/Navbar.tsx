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
    <div className="font-navbar fixed top-4 w-screen flex justify-between lg:px-48 md:px-32 sm:px-16 z-50">
      <div className="flex items-center justify-between w-full border-4 border-black bg-white/70 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(75,75,75,1)] rounded-none">
        <div className="logo-container flex items-center m-6">
          <div
            className="text-primary text-2xl font-bold cursor-pointer"
            onClick={() => redirectOrScrollToTop()}
          >
            {">>"}Nilay Saxena💡 *(Work in progress)
          </div>
        </div>
        <div className="text-base font-bold flex justify-between">
          <Navlink id={1} name="<About/>" />
          <Navlink id={2} name="//Experience" />
          <Navlink id={3} name="_Projects" />
          <Navlink id={4} name="{Contact}" />
          <div className="border-l-4 border-black">
            <Button
              classes="w-fit h-fit my-4 mx-8 px-6 py-2 text-base bg-primary font-navbar font-bold text-white w-fit cursor-pointer border-4 border-primary 
              hover:text-black hover:border-black"
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
