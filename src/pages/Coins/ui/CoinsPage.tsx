import { FC, ChangeEvent, useEffect, useState } from "react";
import cls from "./Coins.module.scss";
import classNames from "../../../utils/classNames/classNames";
import Title, {
  TitleTags,
  TitleTheme,
} from "../../../components/UI/Title/Title";

import Input from "../../../components/UI/Input/Input";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

import {
  setPageUrlParam,
  setSearchUrlParam,
} from "../../../store/reducers/CoinsSlice/urlParams";
import CoinsContent from "../../../components/CoinsContent/CoinsContent";
import useDebounce from "../../../hooks/useDebounce";
import { setSearch } from "../../../store/reducers/CoinsSlice/CoinsSlice";

interface CoinsPageProps {
  className?: string;
}

const CoinsPage: FC<CoinsPageProps> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const currentPage = useAppSelector((state) => state.coins.currentPage);
  const perPage = useAppSelector((state) => state.coins.perPage);
  const searchValue = useAppSelector((state) => state.coins.search);

  const debouncedSearchValue = useDebounce<string>(searchValue, 750);

  useEffect(() => {
    // установка в url parametrs при первой загрузке компонента
    setPageUrlParam(currentPage);
    setSearchUrlParam(searchValue);
  });

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
  };
  return (
    <div className={classNames(cls.CoinsPage, {}, [className || ""])}>
      <Title
        className={cls.Title}
        theme={TitleTheme.hero}
        Tag={TitleTags.h1}
        centered={true}
      >
        Charts
      </Title>
      <Input
        className={cls.search}
        value={searchValue}
        onChangeHandler={searchHandler}
      />

      {/* через CoinsContent происходит запрос к серверу на получение данных. */}
      <CoinsContent
        currentPage={currentPage}
        perPage={perPage}
        search={debouncedSearchValue}
      />
    </div>
  );
};

export default CoinsPage;
