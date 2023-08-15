import { FC } from "react";
import cls from "./Coins.module.scss";
import classNames from "../../../utils/classNames/classNames";
import Title, {
  TitleTags,
  TitleTheme,
} from "../../../components/UI/Title/Title";
import CoinsList from "../../../components/CoinsList/CoinsList";

interface CoinsPageProps {
  className?: string;
}

const CoinsPage: FC<CoinsPageProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.CoinsPage, {}, [className || ""])}>
      <Title
        className={cls.title}
        theme={TitleTheme.hero}
        Tag={TitleTags.h1}
        centered={true}
      >
        Charts
      </Title>
      <CoinsList />
    </div>
  );
};

export default CoinsPage;
