import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function TanstackQueryProvider({ children }) {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {staleTime: 60000}
        },
      });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default TanstackQueryProvider;
