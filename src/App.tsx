import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./components/AppRouter/AppRouter.component";
import "./index.css";
import WithFullScreenSkeleton from "./components/WithFullScreenSkeleton/WithFullScreenSkeleton.component";
import { useContext, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { checkUserSessionQuery } from "./api/oauth/oauth.api";
import { OauthDispatchContext } from "./api/oauth/oauth.utils";

function App() {
  const AppRouterWithSkeleton = WithFullScreenSkeleton(AppRouter);
  const checkUserSessionsQueryOptions = checkUserSessionQuery();
  const { isPending, status, data } = useQuery(
    checkUserSessionsQueryOptions
  );
  const dispatch = useContext(OauthDispatchContext)

  useEffect(() => {
      dispatch({
        type: status,
        payload: data?.user,
      });
  }, [dispatch, data, status]);

  return (
    <>
      <ToastContainer autoClose={2000} />
      <AppRouterWithSkeleton isLoading={isPending} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
