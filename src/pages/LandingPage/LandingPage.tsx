import { useContext, useEffect } from "react";
import { checkUserSessionQuery } from "../../api/oauth/oauth.api";
import { useQuery } from "@tanstack/react-query";
import { OauthDispatchContext } from "../../api/oauth/oauth.utils";
import WithFullScreenSkeleton from "../../components/WithFullScreenSkeleton/WithFullScreenSkeleton";
import WelcomePage from "../WelcomePage/WelcomePage";
import LoginPage from "../LoginPage/LoginPage";

const LandingPage = () => {
  const WelcomeWithSkeleton = WithFullScreenSkeleton(WelcomePage);
  const LoginWithSkeleton = WithFullScreenSkeleton(LoginPage);
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

export default LandingPage;
