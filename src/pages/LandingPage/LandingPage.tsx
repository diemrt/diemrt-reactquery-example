import { useEffect } from "react";
import WithFullScreenSkeleton from "../../components/WithFullScreenSkeleton/WithFullScreenSkeleton";
import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import { useAuth } from "react-oidc-context";

const LandingPage = () => {
  const HomeWithSkeleton = WithFullScreenSkeleton(HomePage);
  const LoginWithSkeleton = WithFullScreenSkeleton(LoginPage);
  const auth = useAuth();

  useEffect(() => {
    return auth.events.addAccessTokenExpiring(() => {
        if (confirm("You're about to be signed out due to inactivity. Press continue to stay signed in.")) {
            auth.signinSilent();
        }
    })
}, [auth, auth.events, auth.signinSilent]);

  return auth.isAuthenticated ? (
    <HomeWithSkeleton isLoading={auth.isLoading} />
  ) : (
    <LoginWithSkeleton isLoading={auth.isLoading} />
  );
};

export default LandingPage;
