import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import classNames from "../../../utils/classNames/classNames";

export enum AppLinkTheme {
  button = "button",
  default = "default",
}

// при добавлении новой темы для ссылки добавляем её в enum и после в css
// .newTheme{} указываем свойства для нее

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    children,
    className,
    to,
    theme = AppLinkTheme.default,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className || "", cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
