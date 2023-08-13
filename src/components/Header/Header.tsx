import { FC } from "react";
import cls from "./Header.module.scss";
import classNames from "../../utils/classNames/classNames";
import Logo from "../UI/Logo/Logo";
import Card from "../UI/Card/Card";
import { NavLink } from "react-router-dom";
import AppLink from "../UI/AppLink/AppLink";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header className={classNames(cls.Header, {}, [className || ""])}>
      <Card className={cls.inner}>
        <AppLink className={cls.logo__wrapper} to={"/"}>
          <Logo />
        </AppLink>
        <nav className={cls.nav}>
          <ul className={cls.list}>
            <li className={cls.item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${cls.active} ${cls.link}` : cls.link
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li className={cls.item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${cls.active} ${cls.link}` : cls.link
                }
                to={"/"}
              >
                Main
              </NavLink>
            </li>
            <li className={cls.item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${cls.active} ${cls.link}` : cls.link
                }
                to={"/coins"}
              >
                Coins
              </NavLink>
            </li>
          </ul>
        </nav>
      </Card>
    </header>
  );
};

export default Header;
