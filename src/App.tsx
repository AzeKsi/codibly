import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsList from "./components/products/products-list";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsList />
    </QueryClientProvider>
  );
}

export default App;
