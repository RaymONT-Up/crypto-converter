import { FC } from "react";
import cls from "./Title.module.scss";
import classNames from "../../../utils/classNames/classNames";

export enum TitleTheme {
  clear = "clear",
  hero = "hero",
  subtitle = "subtitle",
}
export enum TitleTags {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  div = "div",
  p = "p",
}

interface TitleProps {
  Tag: TitleTags;
  children: React.ReactNode;

  theme?: TitleTheme;
  className?: string;
  centered?: boolean;
}

const Title: FC<TitleProps> = (props) => {
  const {
    className,
    children,
    centered = false,
    Tag = TitleTags.div,
    theme = TitleTheme.clear,
  } = props;

  return (
    <Tag
      className={classNames(cls.Title, { [cls.centered]: centered }, [
        className || "",
        cls[theme] || "",
      ])}
    >
      {children}
    </Tag>
  );
};

export default Title;
