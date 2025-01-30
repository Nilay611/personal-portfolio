import { ButtonProps } from "../../shared/models/button";
import { To, useNavigate } from "react-router-dom";

export const Button = ({
  classes,
  text,
  iconPrimary,
  iconSecondary,
  hrefType,
  href,
}: ButtonProps) => {
  const navigate = useNavigate();

  const scrollOrRedirect = () => {
    if (hrefType === "link" && href) {
      window.open(href as string, "_blank");
    } else if (href) {
      navigate(href as To);
    }
  };

  let classList =
    classes +
    " shadow-[4px_4px_0px_0px_rgba(75,75,75,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all";
  return (
    <button className={classList} onClick={scrollOrRedirect}>
      <div className="flex items-center gap-2">
        {iconPrimary}
        {text}
        {iconSecondary}
      </div>
    </button>
  );
};
