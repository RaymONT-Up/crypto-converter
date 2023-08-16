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
import {
  setPage,
  setTotalCoins,
} from "../../../store/reducers/CoinsSlice/CoinsSlice";

interface CoinsPageProps {
  className?: string;
}

const CoinsPage: FC<CoinsPageProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.coins.currentPage);
  const perPage = useAppSelector((state) => state.coins.perPage);

  const { data, isLoading } = useGetCryptosQuery({ perPage, currentPage });
  const coins = data?.data?.coins;
  const total = data?.data?.stats?.totalCoins;

  useEffect(() => {
    // установка total
    if (total) {
      dispatch(setTotalCoins(total));
    }
  }, [dispatch, total]);

  if (isLoading) {
    return <Loader />;
  }

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
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
        currentPage={currentPage}
        perPage={perPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CoinsPage;
