import { FC } from "react";
import cls from "./Logo.module.scss";
import classNames from "../../../utils/classNames/classNames";
import logoSrc from "../../../assets/img/logo.png";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = (props) => {
  const { className = "" } = props;
  return (
    <img
      className={classNames(cls.Logo, {}, [className])}
      src={logoSrc}
      alt={"CryptoLife logotype"}
    />
  );
};

export default Logo;
