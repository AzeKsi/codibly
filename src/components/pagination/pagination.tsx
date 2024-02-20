import clsx from "clsx";
import { PaginationProps } from "./pagination.types";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

export const Pagination = ({ setPage, isFirstPage, isLastPage, currentPage }: PaginationProps) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";

  return (
    <div className="flex items-center gap-8">
      <button
        className={clsx("btn font-semibold", isFirstPage && "text-gray-dark")}
        disabled={isFirstPage || Boolean(id.length)}
        onClick={() => setPage(currentPage - 1)}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <span className="text-lg font-bold">{currentPage}</span>
      <button
        className={clsx("btn font-semibold", isLastPage && "text-gray-dark")}
        disabled={isLastPage || Boolean(id.length)}
        onClick={() => setPage(currentPage + 1)}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};
