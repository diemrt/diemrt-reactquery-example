import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "./api/utils"
import Example from "./components/Example/Example.component"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
