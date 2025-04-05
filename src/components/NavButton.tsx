import { Link } from "react-router-dom";

type TNavButtonProps = {
  children: React.ReactNode;
  routeTo: string;
  style?: string | undefined;
};

export default function NavButton({
  children,
  routeTo,
  style,
}: TNavButtonProps) {
  return (
    <Link to={routeTo} className={style}>
      {children}
    </Link>
  );
}
