import { FC } from "react";
import cls from "./Loader.module.scss";
import classNames from "../../../utils/classNames/classNames";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = (props) => {
  const {className} = props;
  return (
    <div className={classNames(cls.loader, {}, [className || ''])}>
      <div className={classNames(cls.line, {}, [cls.line1])}></div>
      <div className={classNames(cls.line, {}, [cls.line2])}></div>
      <div className={classNames(cls.line, {}, [cls.line3])}></div>
    </div>
  )
};

export default Loader;
