import { User, UserManager, WebStorageStateStore } from "oidc-client-ts";
import { createContext } from "react";
import { AuthState } from "../../hooks/useOauthReducer.hook";
import { Action } from "../utils";

//Creao il client per l'accesso ai metodi del protocollo oauth usando le configurazioni di test
export const client = new UserManager({
    authority: "https://dev-q6m5tuju4skbacty.us.auth0.com",
    client_id: "U1T0PItPSBGH4Fwo3ZA2IOIQ7jghx11N",
    redirect_uri: "",
    userStore: new WebStorageStateStore({
        store: window.localStorage
    })
})
  
export const OauthContext = createContext<AuthState | undefined>(undefined);
export const OauthDispatchContext = createContext<
  React.Dispatch<Action<User>> | undefined
>(undefined);