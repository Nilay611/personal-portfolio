import { NavlinkProps } from "../../shared/models/navlink";

export const Navlink = ({ name }: NavlinkProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sectionMap: { [key: string]: string } = {
    "<About/>": "about",
    "//Experience": "experience",
    _Projects: "hero",
    "{Contact}": "contact",
  };

  return (
    <div
      onClick={() => scrollToSection(sectionMap[name])}
      className="w-fit font-navbar py-6 px-10 flex items-center cursor-pointer border-l-4 border-black hover:text-primary"
    >
      {name}
    </div>
  );
};
