import { User, UserManagerSettings, WebStorageStateStore } from "oidc-client-ts";


export const isRopcEnabled = import.meta.env.VITE_OAUTH_IS_ROPC === "true"

export const authority = isRopcEnabled ? import.meta.env.VITE_OAUTH_ROPC_AUTHORITY : import.meta.env.VITE_OAUTH_REDIRECT_AUTHORITY

export const oidcConfig: UserManagerSettings = {
  authority: authority,
  client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),
  scope: isRopcEnabled ? import.meta.env.VITE_OAUTH_SCOPE : undefined
};

export function getStoredUser() {
  const oidcStorage = localStorage.getItem(
    `oidc.user:${authority}:${import.meta.env.VITE_OAUTH_CLIENT_ID}`
  );
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}
