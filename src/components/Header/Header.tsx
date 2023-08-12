import { FC } from "react";
import cls from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import AppLink from "../UI/AppLink/AppLink";
import Container from "../UI/Container/Container";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <header className={cls.Header}>
      <Container>
        <AppLink to={"/"} className={cls.logo}>
          <Logo />
        </AppLink>
      </Container>
    </header>
  );
};

export default Header;
