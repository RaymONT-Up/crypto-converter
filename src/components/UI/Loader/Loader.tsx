import { FC } from "react";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = (props) => {
  return <div>Loader</div>;
};

export default Loader;
