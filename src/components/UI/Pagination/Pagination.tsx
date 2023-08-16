import { FC } from "react";
import cls from "./Pagination.module.scss";
import classNames from "../../../utils/classNames/classNames";

interface PaginationProps {
  className?: string;

  total: number;
  offset: number; // страница
  limit: number; // всего на странице
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { className, offset, total, limit, onPageChange } = props;

  const totalPages = Math.ceil(total / limit);

  const displayPages: number[] = [];
  const visiblePages = 5;
  for (
    let i = Math.max(1, offset - Math.floor(visiblePages / 2));
    i <= Math.min(totalPages, offset + Math.floor(visiblePages / 2));
    i++
  ) {
    displayPages.push(i);
  }
  console.log(displayPages, totalPages);

  return (
    <ul className={classNames(cls.Pagination, {}, [className || ""])}>
      {displayPages.map((num) => (
        <li className={cls.button} onClick={() => onPageChange(num)} key={num}>
          {num}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
