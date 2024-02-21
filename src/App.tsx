import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./api/utils"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Posts from "./pages/Posts/Posts.page"

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
