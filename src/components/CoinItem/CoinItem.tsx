import { FC, useState } from "react";
import cls from "./CoinItem.module.scss";
import Title, { TitleTags, TitleTheme } from "../UI/Title/Title";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import Card from "../UI/Card/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

interface CoinItemProps {
  className?: string;

  name: string;
  iconUrl: string;
  symbol: string;
  id: string;
  sparkline: string[];
  price: string;
}

const options = {};
const CoinItem: FC<CoinItemProps> = (props: CoinItemProps) => {
  const { name, price, iconUrl, symbol, id, sparkline } = props;

  const [cryptoData, setCryptoData] = useState({
    labels: sparkline.map((num, index) => index.toString()),
    datasets: [{ label: "$", data: sparkline.map((num) => Math.trunc(+num)) }],
  });

  return (
    <li className={cls.CoinItem}>
      <div className={cls.top}>
        <Title
          className={cls.name}
          Tag={TitleTags.h6}
          theme={TitleTheme.subtitle}
        >
          {name}
        </Title>
        <img className={cls.icon} src={iconUrl} alt={`icon of ${name}`} />
      </div>
      <div>{price}</div>

      <div>{symbol}</div>

      <Line data={cryptoData} options={options} />
    </li>
  );
};

export default CoinItem;
