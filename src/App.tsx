import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./components/AppRouter/AppRouter.component";
import "./index.css";
import { checkUserSession } from "./api/firebase/firebase.api";
import WithFullScreenSkeleton from "./components/WithFullScreenSkeleton/WithFullScreenSkeleton.component";
import { useEffect } from "react";
import useFirebaseReducer from "./api/firebase/hooks/useFirebaseReducer.hook";
import {
  FirebaseActionKind,
  FirebaseContext,
  FirebaseDispatchContext,
} from "./api/firebase/firebase.utils";

function App() {
  const AppRouterWithSkeleton = WithFullScreenSkeleton(AppRouter);
  const checkUserSessionsQueryOptions = checkUserSession();
  const { isPending, isSuccess, data } = useQuery(
    checkUserSessionsQueryOptions
  );
  const [state, dispatch] = useFirebaseReducer();

  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: FirebaseActionKind.SUCCEEDED,
        payload: data?.user,
      });
    }
  });

  return (
    <>
      <FirebaseContext.Provider value={state}>
        <FirebaseDispatchContext.Provider value={dispatch}>
          <AppRouterWithSkeleton isLoading={isPending} />
        </FirebaseDispatchContext.Provider>
      </FirebaseContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
