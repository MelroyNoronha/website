import Link, { LinkProps } from "next/link";

import styles from "./styled-link.module.css";

interface StyledLinkProps extends LinkProps {
  children: React.ReactNode;
  target?: string;
  className?: string;
}

export default function StyledLink({
  children,
  className,
  ...props
}: StyledLinkProps) {
  return (
    <Link {...props} className={`${styles.link} ${className && className}`}>
      {children}
    </Link>
  );
}
