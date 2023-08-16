import { FC } from "react";
import cls from "./CoinsList.module.scss";
import classNames from "../../utils/classNames/classNames";
import CoinItem from "../CoinItem/CoinItem";

interface CoinsListProps {
  className?: string;
  coins: object[];
}

const CoinsList: FC<CoinsListProps> = (props) => {
  const { className, coins } = props;

  return (
    <ul className={classNames(cls.CoinsList, {}, [className || ""])}>
      {coins.map((item: any) => (
        <CoinItem
          name={item.name}
          key={item.uuid}
          iconUrl={item.iconUrl}
          symbol={item.symbol}
          id={item.uuid}
          sparkline={item.sparkline}
          price={item.price}
        />
      ))}
    </ul>
  );
};

export default CoinsList;
