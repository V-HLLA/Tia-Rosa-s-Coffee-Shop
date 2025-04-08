import { Link } from "react-router-dom";

type TNavButtonProps = {
  children: React.ReactNode;
  routeTo: string;
  style?: string | undefined;
  handleClick: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavButton({
  children,
  routeTo,
  style,
  handleClick,
  setIsOpen,
}: TNavButtonProps) {
  return (
    <Link
      to={routeTo}
      className={style}
      onClick={() => {
        handleClick();
        setIsOpen(false);
      }}
    >
      {children}
    </Link>
  );
}
