import { useSearchInput } from "./search-input.effect";

export const SearchInput = () => {
  const { search, setSearch } = useSearchInput();

  return (
    <div className="w-full flex flex-col gap-3 max-w-[250px]">
      <input
        type="text"
        name="search"
        placeholder="Search for id"
        className="rounded-xl px-4 py-2"
        value={search ?? ""}
        onChange={(e) => {
          const result = e.target.value.replace(/\D/g, "");
          setSearch(result);
        }}
      />
    </div>
  );
};
