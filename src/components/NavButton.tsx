import { Link } from "react-router-dom";

type TNavButtonProps = {
  name: string;
  routeTo: string;
};

export default function NavButton({ name, routeTo }: TNavButtonProps) {
  return <Link to={routeTo}>{name}</Link>;
}
