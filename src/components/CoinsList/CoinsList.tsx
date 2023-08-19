import { FC } from "react";
import cls from "./CoinsList.module.scss";
import classNames from "../../utils/classNames/classNames";
import CoinItem from "../CoinItem/CoinItem";
import { ICoinItem, TypesCoins } from "../../models/ModelCoins";

interface CoinsListProps {
  className?: string;
  coins: TypesCoins;
}

const CoinsList: FC<CoinsListProps> = (props) => {
  const { className, coins } = props;

  return (
    <ul className={classNames(cls.CoinsList, {}, [className || ""])}>
      {coins.map((item: ICoinItem) => (
        <CoinItem
          name={item.name}
          key={item.uuid}
          iconUrl={item.iconUrl}
          symbol={item.symbol}
          uuid={item.uuid}
          sparkline={item.sparkline}
          price={item.price}
          change={item.change}
          rank={item.rank}
          tier={item.tier}
          listedAt={item.listedAt}
          lowVolume={item.lowVolume}
          marketCap={item.marketCap}
        />
      ))}
    </ul>
  );
};

export default CoinsList;
