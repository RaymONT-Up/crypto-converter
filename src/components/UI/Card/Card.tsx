import { FC } from "react";
import cls from "./Card.module.scss";
import classNames from "../../../utils/classNames/classNames";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: FC<CardProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.Card, {}, [className || ""])}>
      {children}
    </div>
  );
};

export default Card;
