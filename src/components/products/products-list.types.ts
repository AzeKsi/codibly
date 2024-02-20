export type Product = {
  id: number;
  name: string;
  color: string;
  year: number;
  pantone_value: string;
};

type PaginatedQuery = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type getQueryProducts = {
  data: Product[];
} & PaginatedQuery;
