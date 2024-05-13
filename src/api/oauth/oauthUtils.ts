import { User, WebStorageStateStore } from "oidc-client-ts";

export const oidcConfig = {
  authority: import.meta.env.VITE_OAUTH_AUTHORITY,
  client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_OAUTH_REDIRECT_URI,
  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),
};

export function getStoredUser() {
  const oidcStorage = localStorage.getItem(
    `oidc.user:${import.meta.env.VITE_OAUTH_AUTHORITY}:${import.meta.env.VITE_OAUTH_CLIENT_ID}`
  );
  if (!oidcStorage) {
    return null;
  }

  return User.fromStorageString(oidcStorage);
}
