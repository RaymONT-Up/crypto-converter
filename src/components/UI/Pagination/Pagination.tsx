import { FC } from "react";
import cls from "./Pagination.module.scss";
import classNames from "../../../utils/classNames/classNames";

interface PaginationProps {
  className?: string;

  total: number;
  currentPage: number; // страница
  perPage: number; // всего на странице
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { className, currentPage, total, perPage, onPageChange } = props;

  const totalPages = Math.ceil(total / perPage);

  const displayPages: number[] = [];
  const visiblePages = 5;
  for (
    let i = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    i <= Math.min(totalPages, currentPage + Math.floor(visiblePages / 2));
    i++
  ) {
    displayPages.push(i);
  }

  const isActivePage = (currentPage: number, numPage: number): boolean => {
    return currentPage === numPage ? true : false;
  };
  return (
    <ul className={classNames(cls.Pagination, {}, [className || ""])}>
      {displayPages.map((num) => (
        <li
          className={classNames(cls.button, {
            [cls.activePage]: isActivePage(currentPage, num),
          })}
          onClick={() => onPageChange(num)}
          key={num}
        >
          {num}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
