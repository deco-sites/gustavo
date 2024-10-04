import { Link } from "../../sections/Header.tsx";
import Icon from "../ui/Icon.tsx";

const Label = ({ icon, label }: Omit<Link, "children" | "href">) => (
  <>
    <Icon id={icon} size={20} /> {label}
  </>
);

export default Label;
