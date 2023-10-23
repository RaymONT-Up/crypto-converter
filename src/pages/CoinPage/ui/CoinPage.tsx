import { FC } from "react";
import cls from "./CoinPage.module.scss";
import classNames from "../../../utils/classNames/classNames";


interface CoinPageProps {
  className?: string;
}

const CoinPage: FC<CoinPageProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.CoinPage, {}, [className || ""])}>
      CoinPage
    </div>
  );
};

export default CoinPage;
