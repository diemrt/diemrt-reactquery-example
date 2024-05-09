import { useContext, useEffect } from "react";
import { checkUserSessionQuery } from "../../api/oauth/oauth.api";
import { useQuery } from "@tanstack/react-query";
import { OauthDispatchContext } from "../../api/oauth/oauth.utils";
import WithFullScreenSkeleton from "../../components/WithFullScreenSkeleton/WithFullScreenSkeleton.component";
import Welcome from "../Welcome/Welcome.page";
import Login from "../Login/Login.page";

const LoginOrNot = () => {
  const WelcomeWithSkeleton = WithFullScreenSkeleton(Welcome);
  const LoginWithSkeleton = WithFullScreenSkeleton(Login);
  const checkUserSessionsQueryOptions = checkUserSessionQuery();
  const { isPending, status, data } = useQuery(checkUserSessionsQueryOptions);
  const dispatch = useContext(OauthDispatchContext);

  useEffect(() => {
    dispatch({
      type: status,
      payload: data?.user,
    });
  }, [dispatch, data, status]);

  return (
    data?.user ? (
        <WelcomeWithSkeleton isLoading={isPending} />
    ) : (
        <LoginWithSkeleton isLoading={isPending} />
    )
  );
};

export default LoginOrNot;
