import { useEffect, useState } from "react";
import ShowOnCondition from "../../components/ShowOnCondition/ShowOnCondition";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import { hasAuthParams, useAuth } from "react-oidc-context";
import { isRopcEnabled } from "../../api/oauth/oauthUtils";

const LoginPage = () => {
  const auth = useAuth()
  const [hasTriedSignin, setHasTriedSignin] = useState(false);
  useEffect(() => {
    if (!hasAuthParams() &&
        !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading &&
        !hasTriedSignin &&
        !isRopcEnabled
    ) {
        auth.signinRedirect();
        setHasTriedSignin(true);
    }
    
    return auth.events.addAccessTokenExpiring(() => {
      if (confirm("Stai per essere disconnesso a causa di inattività. Premi “Continua” per rimanere connesso.")) {
          auth.signinSilent();
      }
  })

}, [auth, hasTriedSignin, auth.events, auth.signinSilent]);
  return (
    <ShowOnCondition showWhen={isRopcEnabled}>
      <LoginForm />
    </ShowOnCondition>
  );
};

export default LoginPage;
