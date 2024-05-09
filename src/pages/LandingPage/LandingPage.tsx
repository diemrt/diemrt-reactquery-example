import { useEffect, useState } from "react";
import WithFullScreenSkeleton from "../../components/WithFullScreenSkeleton/WithFullScreenSkeleton";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { hasAuthParams, useAuth } from "react-oidc-context";

const LandingPage = () => {
  const HomeWithSkeleton = WithFullScreenSkeleton(HomePage);
  const LoginWithSkeleton = WithFullScreenSkeleton(LoginPage);
  const [hasTriedSignin, setHasTriedSignin] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading &&
      !hasTriedSignin
    ) {
      auth.signinRedirect();
      setHasTriedSignin(true);
    }

    return auth.events.addAccessTokenExpiring(() => {
      if (
        confirm(
          "You're about to be signed out due to inactivity. Press continue to stay signed in."
        )
      ) {
        auth.signinSilent();
      }
    });
  }, [auth, hasTriedSignin, auth.events, auth.signinSilent]);

  return auth.isAuthenticated ? (
    <HomeWithSkeleton isLoading={auth.isLoading} />
  ) : (
    <h1>Caricamento...</h1>
  );
};

export default LandingPage;
