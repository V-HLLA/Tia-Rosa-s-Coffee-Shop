import Link from "next/link";

type TNavButtonProps = {
  children: React.ReactNode;
  routeTo: string;
  style?: string | undefined;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavButton({
  children,
  routeTo,
  style,
  setIsOpen,
}: TNavButtonProps) {
  return (
    <Link
      href={routeTo}
      className={style}
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {children}
    </Link>
  );
}
