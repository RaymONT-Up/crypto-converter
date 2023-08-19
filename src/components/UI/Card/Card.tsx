import { FC } from "react";
import cls from "./Card.module.scss";
import classNames from "../../../utils/classNames/classNames";

export enum cardThemes {
  classic = "classic",
  glossyRed = "glossyRed",
  glossyGreen = "glossyGreen",
}

export enum CardTags {
  div = "div",
  ul = "ul",
  li = "li",
}

interface CardProps {
  className?: string;
  theme?: cardThemes;
  Tag?: CardTags;

  children: React.ReactNode;
}

const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    theme = cardThemes.classic,
    Tag = CardTags.div,
  } = props;
  return (
    <Tag
      className={classNames(cls.Card, {}, [className || "", cls[theme] || ""])}
    >
      {children}
    </Tag>
  );
};

export default Card;
