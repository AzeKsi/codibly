import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Product, getQueryProducts } from "./products-list.types";
import { useEffect } from "react";
import { stringify } from "qs";

const fetchProducts = async (page: string = "1", id: string = ""): Promise<getQueryProducts> => {
  const queryParams = stringify({ page, id }, { addQueryPrefix: true });
  const response = await fetch(`https://reqres.in/api/products${queryParams}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export const useProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const id = searchParams.get("id") || "";

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["products", page, id],
    queryFn: () => fetchProducts(page, id),
    refetchOnWindowFocus: false,
    retry: false,
  });

  const setPage = (value: number) => {
    setSearchParams({ page: value.toString() });
  };

  const isFirstPage = data?.page === 1;
  const isLastPage = data?.page === data?.total_pages;

  useEffect(() => {
    if (data && data.total_pages < Number(page)) {
      setSearchParams({ page: "1" });
    }
  }, [data, page, setSearchParams]);

  const productData: Product[] = [];
  if (id) {
    const result = data?.data as unknown as Product;
    if (result) {
      productData.push(result);
    }
  }

  return {
    products: id ? productData : data?.data || [],
    totalProducts: id ? productData.length : data?.total,
    isLoading,
    isFetching,
    isError,
    error,
    setPage,
    isFirstPage,
    isLastPage,
    totalPages: data?.total_pages || 0,
    currentPage: Number(page) || 1,
  };
};
