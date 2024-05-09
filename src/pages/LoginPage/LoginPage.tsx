import { useEffect, useState } from "react";
import ShowOnCondition from "../../components/ShowOnCondition/ShowOnCondition";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import { hasAuthParams, useAuth } from "react-oidc-context";

const LoginPage = () => {
  const isRedirectLogin = true; //set false to enable custom login
  const auth = useAuth()
  const [hasTriedSignin, setHasTriedSignin] = useState(false);
  useEffect(() => {
    if (!hasAuthParams() &&
        !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading &&
        !hasTriedSignin &&
        isRedirectLogin
    ) {
        auth.signinRedirect();
        setHasTriedSignin(true);
    }
}, [auth, hasTriedSignin, isRedirectLogin]);
  return (
    <ShowOnCondition showWhen={!isRedirectLogin}>
      <LoginForm />
    </ShowOnCondition>
  );
};

export default LoginPage;
