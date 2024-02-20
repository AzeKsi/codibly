import { useSearchParams } from "react-router-dom";

export const useSearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("id");

  const setSearch = (value: string) => {
    setSearchParams((prev) => {
      prev.set("id", value);
      return prev;
    });
  };

  return { search, setSearch };
};
