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
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card, { CardTags, cardThemes } from "../UI/Card/Card";
import { ICoinItem } from "../../models/ModelCoins";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const options: ChartOptions<'line'>  = {
  responsive: true, // Make the chart responsive
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {  
      display: false,
    },
    y: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },  
    line: {
      borderWidth: 2.5,
      tension: 0.5,
      borderColor: "#3671e9",
    },
  },
};
const currentDate = +new Date();

const dates = Array.from({ length: 24 }, (_, index) => {
  const time = new Date(currentDate - index * 3600000); // 3600000 миллисекунд в часе
  const formattedTime = time.toISOString().slice(0, 16); // Форматируем как "ГГГГ-ММ-ДД ЧЧ:ММ"
  return formattedTime;
});

const CoinItem: FC<ICoinItem> = (props) => {
  const { name, price, iconUrl, symbol, rank, sparkline, change, marketCap } =
    props;
  console.log(props);
  const [cryptoData] = useState({
    labels: dates,
    datasets: [{ label: "$", data: sparkline.map((num) => +num) }],
  });

  const cardTheme =
    +change >= 0 ? cardThemes.glossyGreen : cardThemes.glossyRed;

  return (
    <Card className={cls.CoinItem} Tag={CardTags.li} theme={cardTheme}>
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
      <div className={cls.bottom}>
        <ul className={cls.list}>
          <li className={cls.listItem}>Price: {price}</li>
          <li className={cls.listItem}>Change: {change}</li>
          <li className={cls.listItem}>Rank: {rank}</li>
          <li className={cls.listItem}>Symbol: {symbol}</li>
          <li className={cls.listItem}>MarketCap: {marketCap}</li>
        </ul>
        <div className={cls.chart}>
          <Line data={cryptoData} options={options} />
        </div>
      </div>
    </Card>
  );
};

export default CoinItem;
