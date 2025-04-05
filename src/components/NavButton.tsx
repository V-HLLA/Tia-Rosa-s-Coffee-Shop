import { Link } from "react-router-dom";

type TNavButtonProps = {
  name: string;
  routeTo: string;
  style?: string | undefined;
};

export default function NavButton({ name, routeTo, style }: TNavButtonProps) {
  return (
    <Link to={routeTo} className={style}>
      {name}
    </Link>
  );
}
