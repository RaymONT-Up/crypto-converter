import { FC } from "react";
import cls from "./Hero.module.scss";
import classNames from "../../utils/classNames/classNames";
import Title, { TitleTags, TitleTheme } from "../UI/Title/Title";
import AppLink, { AppLinkTheme } from "../UI/AppLink/AppLink";

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.Hero, {}, [className || ""])}>
      <div className={cls.content}>
        <Title
          className={cls.title}
          Tag={TitleTags.h1}
          theme={TitleTheme.hero}
          centered={true}
        >
          Unleash the crypto universe
        </Title>

        <AppLink
          className={cls.button}
          to={"/coins"}
          theme={AppLinkTheme.button}
        >
          Read more
        </AppLink>
      </div>
    </div>
  );
};

export default Hero;
