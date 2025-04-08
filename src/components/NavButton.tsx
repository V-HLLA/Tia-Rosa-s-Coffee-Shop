import { Link } from "react-router-dom";

type TNavButtonProps = {
  children: React.ReactNode;
  routeTo: string;
  style?: string | undefined;
  handleClick: () => void;
};

export default function NavButton({
  children,
  routeTo,
  style,
  handleClick,
}: TNavButtonProps) {
  return (
    <Link to={routeTo} className={style} onClick={() => handleClick()}>
      {children}
    </Link>
  );
}
