import { useQuery } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppRouter from "./components/AppRouter/AppRouter.component";
import './index.css'
import { checkUserSession } from "./api/firebase/firebase.api";
import WithSkeleton from "./components/WithSkeleton/WithSkeleton.component";

function App() {
  const AppRouterWithSkeleton = WithSkeleton(AppRouter)
  const checkUserSessionsQueryOptions = checkUserSession()
  const { isPending } = useQuery(checkUserSessionsQueryOptions)
  return (
    <>
      <AppRouterWithSkeleton isLoading={isPending} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
