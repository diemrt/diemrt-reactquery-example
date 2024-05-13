import { useEffect, useState } from "react";
import ShowOnCondition from "../../components/ShowOnCondition/ShowOnCondition";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import { hasAuthParams, useAuth } from "react-oidc-context";

const LoginPage = () => {
  const isResourceOwnerLogin = import.meta.env.VITE_OAUTH_ENABLE_RESOURCE_OWNER_FLOW === "true";
  const auth = useAuth()
  const [hasTriedSignin, setHasTriedSignin] = useState(false);
  useEffect(() => {
    if (!hasAuthParams() &&
        !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading &&
        !hasTriedSignin &&
        !isResourceOwnerLogin
    ) {
        auth.signinRedirect();
        setHasTriedSignin(true);
    }
    
    return auth.events.addAccessTokenExpiring(() => {
      if (confirm("Stai per essere disconnesso a causa di inattività. Premi “Continua” per rimanere connesso.")) {
          auth.signinSilent();
      }
  })

}, [auth, hasTriedSignin, isResourceOwnerLogin, auth.events, auth.signinSilent]);
  return (
    <ShowOnCondition showWhen={isResourceOwnerLogin}>
      <LoginForm />
    </ShowOnCondition>
  );
};

export default LoginPage;
