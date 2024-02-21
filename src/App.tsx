import { useQuery } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import AppRouter from "./components/AppRouter/AppRouter.component";
import './index.css'
import { checkUserSession } from "./api/firebase/firebase.api";
import WithFullScreenSkeleton from "./components/WithFullScreenSkeleton/WithFullScreenSkeleton.component";

function App() {
  const AppRouterWithSkeleton = WithFullScreenSkeleton(AppRouter)
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
