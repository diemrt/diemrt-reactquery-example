import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";
import WithFullScreenSkeleton from "../../components/WithFullScreenSkeleton/WithFullScreenSkeleton";

const SigninCallbackPage = () => {
  const auth = useAuth();
  const Skeleton = WithFullScreenSkeleton(undefined);
  return auth.isLoading ? <Skeleton isLoading={true} /> : <Navigate to="/" />;
};

export default SigninCallbackPage;
