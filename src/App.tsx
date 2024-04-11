import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./components/AppRouter/AppRouter.component";
import "./index.css";
import { checkUserSessionQuery } from "./api/firebase/firebase.api";
import WithFullScreenSkeleton from "./components/WithFullScreenSkeleton/WithFullScreenSkeleton.component";
import { useContext, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {
  FirebaseDispatchContext,
} from "./api/firebase/firebase.utils";
import { ToastContainer } from "react-toastify";

function App() {
  const AppRouterWithSkeleton = WithFullScreenSkeleton(AppRouter);
  const checkUserSessionsQueryOptions = checkUserSessionQuery();
  const { isPending, status, data } = useQuery(
    checkUserSessionsQueryOptions
  );
  const dispatch = useContext(FirebaseDispatchContext)

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
