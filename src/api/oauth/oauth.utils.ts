import { User, UserManager, WebStorageStateStore } from "oidc-client-ts";
import { createContext } from "react";
import { AuthState } from "../../hooks/useOauthReducer.hook";
import { Action } from "../utils";

//Creao il client per l'accesso ai metodi del protocollo oauth usando le configurazioni di test
export const client = new UserManager({
  authority: import.meta.env.VITE_OAUTH_AUTHORITY,
  client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
  client_secret: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
  redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),
});

export const OauthContext = createContext<AuthState | undefined>(undefined);
export const OauthDispatchContext = createContext<
  React.Dispatch<Action<User>> | undefined
>(undefined);

export function getStoredUser() {
  const oidcStorage = localStorage.getItem(
    `oidc.user:${import.meta.env.VITE_OAUTH_AUTHORITY}:${import.meta.env.VITE_OAUTH_CLIENT_ID}`
  );
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}
