import { To } from "react-router-dom";

export interface ButtonProps {
  classes?: string;
  text?: string;
  iconPrimary?: JSX.Element;
  iconSecondary?: JSX.Element;
  hrefType?: string;
  href?: string | To;
}
