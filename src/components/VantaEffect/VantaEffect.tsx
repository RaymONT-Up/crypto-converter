import { FC, useEffect, useRef, useState } from "react";
import cls from "./VantaEffect.module.scss";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import classNames from "../../utils/classNames/classNames";

interface VantaEffectProps {
  className?: string;
}

const VantaEffect: FC<VantaEffectProps> = ({ className }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const refVenta = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: refVenta.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x0,
          backgroundColor: 0x0,
          size: 1.2,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div
      ref={refVenta}
      className={classNames(cls.VantaEffect, {}, [className || ""])}
    ></div>
  );
};

export default VantaEffect;
