import { FC } from "react";
import cls from "./Container.module.scss";
import classNames from "../../../utils/classNames/classNames";

export enum ContainerTheme {
  DEFAULT = "default",
}

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  theme?: ContainerTheme;
}

const Container: FC<ContainerProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.Container, {}, [className || ""])}>
      {children}
    </div>
  );
};

export default Container;
