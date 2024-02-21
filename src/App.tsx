import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./api/utils"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppRouter from "./components/AppRouter/AppRouter.component";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
