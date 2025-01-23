import { NavlinkProps } from "../../shared/models/navlink";

export const Navlink = ({ name }: NavlinkProps) => {
  return (
    <div className="font-marcellus_sc_regular w-fit my-4 mx-8 p-2 flex items-center cursor-pointer border-t-2 border-b-2 border-transparent hover:text-primary hover:border-primary">
      {name}
    </div>
  );
};
