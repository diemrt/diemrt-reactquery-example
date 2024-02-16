import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./api/utils"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import PostsPage from "./pages/PostsPage/Posts.page"

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <PostsPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
