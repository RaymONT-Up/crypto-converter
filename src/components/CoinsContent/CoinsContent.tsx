import { FC, useEffect } from "react";
import cls from "./CoinsContent.module.scss";
import CoinsList from "../CoinsList/CoinsList";
import Pagination from "../UI/Pagination/Pagination";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useAppDispatch } from "../../hooks/redux";
import classNames from "../../utils/classNames/classNames";
import {
  setPage,
  setTotalCoins,
} from "../../store/reducers/CoinsSlice/CoinsSlice";
import Loader from "../UI/Loader/Loader";

interface CoinsContentProps {
  className?: string;
  perPage: number;
  currentPage: number;
  search: string;
}

const CoinsContent: FC<CoinsContentProps> = (props) => {
  const { className, perPage, currentPage, search } = props;

  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetCryptosQuery({
    perPage,
    currentPage,
    search,
  });

  const coins = data?.data?.coins;
  const total = data?.data?.stats?.totalCoins;

  useEffect(() => {
    // установка total
    if (total) {
      dispatch(setTotalCoins(total));
    }
  }, [dispatch, total]);

  if (isFetching) {
    return <Loader />;
  }

  const onPageChange = (page: number) => {
    if (page !== currentPage) {
      dispatch(setPage(page));
    }
  };

  return (
    <div className={classNames(cls.CoinsContent, {}, [className || ""])}>
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

export default CoinsContent;
