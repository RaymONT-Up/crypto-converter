import { FC, useEffect, useState } from "react";
import cls from "./Coins.module.scss";
import classNames from "../../../utils/classNames/classNames";
import Title, {
  TitleTags,
  TitleTheme,
} from "../../../components/UI/Title/Title";
import CoinsList from "../../../components/CoinsList/CoinsList";
import Pagination from "../../../components/UI/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Loader from "../../../components/UI/Loader/Loader";
import { useGetCryptosQuery } from "../../../services/cryptoApi";
import { useSearchParams } from "react-router-dom";
import { setPage, setTotalCoins } from "../../../store/reducers/CoinsSlice";

interface CoinsPageProps {
  className?: string;
}

const CoinsPage: FC<CoinsPageProps> = (props) => {
  const { className } = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const [urlPageNumber, setUrlPageNumber] = useState(searchParams.get("page"));
  console.log(urlPageNumber);

  const dispatch = useAppDispatch();
  const offset = useAppSelector((state) => state.coins.offset);
  const limit = useAppSelector((state) => state.coins.limit);

  const { data, isLoading } = useGetCryptosQuery({ limit, offset });
  const coins = data?.data?.coins;
  const total = data?.data?.stats?.totalCoins;

  useEffect(() => {
    if (total) {
      dispatch(setTotalCoins(total));
    }
  }, [dispatch, total]);

  if (isLoading) {
    return <Loader />;
  }

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
    // @ts-ignore
    setUrlPageNumber(page);
  };
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
      <CoinsList coins={coins} />
      <Pagination
        total={total}
        offset={offset}
        limit={limit}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CoinsPage;
