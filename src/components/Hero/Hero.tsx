import { FC, useEffect, useRef, useState } from "react";
import cls from "./Hero.module.scss";
import classNames from "../../utils/classNames/classNames";
import Title, { TitleTags, TitleTheme } from "../UI/Title/Title";
import AppLink, { AppLinkTheme } from "../UI/AppLink/AppLink";

import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

interface HeroProps {
  className?: string;
}

const Hero: FC<HeroProps> = (props) => {
  const { className } = props;

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x0,
          backgroundColor: 0x0,
          size: 1.2,
          speed: 0,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div ref={myRef} className={classNames(cls.Hero, {}, [className || ""])}>
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
