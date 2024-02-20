import { Loader } from "../loader/loader";
import { Pagination } from "../pagination/pagination";
import { SearchInput } from "../search-input/search-input";
import { Product } from "./product/product";
import { useProductsList } from "./products-list.effect";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

const ProductsList = () => {
  const {
    products,
    totalProducts,
    setPage,
    isFirstPage,
    isLastPage,
    totalPages,
    currentPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useProductsList();

  return (
    <div className="flex flex-col max-w-screen-xl justify-center items-center mx-auto mt-24">
      <div className="relative rounded-xl bg-zinc-900 w-full min-h-[600px]">
        <div className="px-8 flex items-center gap-8 mt-8">
          <h1>Products List</h1>
          <SearchInput />
        </div>
        <div className="overflow-hidden my-8">
          {isError ? (
            <div className="flex items-center justify-center mt-16">
              <span>
                <MdErrorOutline size={36} className="text-rose-500" />
              </span>
              <h1 className="px-8 text-4xl">{error?.message}</h1>
            </div>
          ) : isLoading || isFetching ? (
            <Loader />
          ) : products.length === 0 ? (
            <div className="flex items-center justify-center mt-16">
              <span>
                <IoNewspaperOutline size={36} className="text-gray-500" />
              </span>
              <h1 className="px-8 text-4xl">No products, sorry</h1>
            </div>
          ) : (
            <table className="table-auto w-full mt-8 text-lg border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="table-heading">Id</th>
                  <th className="table-heading">Name</th>
                  <th className="table-heading">Value</th>
                  <th className="table-heading">Year</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <Product product={product} key={product.id} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center w-full mt-8">
        <p className="p-4 bg-[#1a1a1a] rounded-xl">
          Total products: <span className="font-bold text-xl">{totalProducts}</span>
        </p>
        <Pagination
          setPage={setPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductsList;
