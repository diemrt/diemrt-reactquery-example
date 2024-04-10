import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./components/AppRouter/AppRouter.component";
import "./index.css";
import { checkUserSessionQuery } from "./api/firebase/firebase.api";
import WithFullScreenSkeleton from "./components/WithFullScreenSkeleton/WithFullScreenSkeleton.component";
import { useEffect } from "react";
import useFirebaseReducer from "./api/firebase/hooks/useFirebaseReducer.hook";
import 'react-toastify/dist/ReactToastify.css';
import {
  FirebaseContext,
  FirebaseDispatchContext,
} from "./api/firebase/firebase.utils";
import { ToastContainer } from "react-toastify";

function App() {
  const AppRouterWithSkeleton = WithFullScreenSkeleton(AppRouter);
  const checkUserSessionsQueryOptions = checkUserSessionQuery();
  const { isPending, status, data } = useQuery(
    checkUserSessionsQueryOptions
  );
  const [state, dispatch] = useFirebaseReducer();

  useEffect(() => {
      dispatch({
        type: status,
        payload: data?.user,
      });
  }, [dispatch, data, status]);

  return (
    <>
      <FirebaseContext.Provider value={state}>
        <FirebaseDispatchContext.Provider value={dispatch}>
          <ToastContainer autoClose={2000} />
          <AppRouterWithSkeleton isLoading={isPending} />
        </FirebaseDispatchContext.Provider>
      </FirebaseContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
