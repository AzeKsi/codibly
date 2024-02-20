export type PaginationProps = {
  setPage: (page: number) => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  totalPages: number;
  currentPage: number;
};
