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
import Card, { CardTags, cardThemes } from "../UI/Card/Card";
import { ICoinItem } from "../../models/ModelCoins";
import classNames from "../../utils/classNames/classNames";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

const options = {
  scales: {
    y: {
      beginAtZero: false, // Начинать от значения, а не с 0
      ticks: {
        // stepSize: 0.1, / / Шаг изменения между значениями
      },
    },
    x: {
      beginAtZero: false, // Начинать от значения, а не с 0
      ticks: {
        // stepSize: 0.1, // Шаг изменения между значениями
      },
    },
  },
  elements: {
    point: {
      radius: 0, // радиус точки
      // backgroundColor: "#000",
    },
    line: {
      borderWidth: 2,
      tension: 0.5, // сглаживание от 0 до 1
      borderColor: "#3671e9",
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: false,
    // },
  },
};

const CoinItem: FC<ICoinItem> = (props) => {
  const { name, price, iconUrl, symbol, sparkline, change } = props;

  const [cryptoData] = useState({
    labels: sparkline.map((num, index) => "test"),
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
      <div>price: {price}</div>

      <div>change: {change}</div>

      <Line data={cryptoData} options={options} />
    </Card>
  );
};

export default CoinItem;
