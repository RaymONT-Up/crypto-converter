import { FC } from "react";
import cls from "./CoinsList.module.scss";
import classNames from "../../utils/classNames/classNames";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loader from "../UI/Loader/Loader";
import CoinItem from "../CoinItem/CoinItem";

interface CoinsListProps {
  className?: string;
}

const CoinsList: FC<CoinsListProps> = (props) => {
  const { className } = props;

  const { data, isLoading } = useGetCryptosQuery("");

  if (isLoading) {
    return <Loader />;
  }

  const coins = data.data.coins;
  console.log(data);
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
