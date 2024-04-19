import { useReducer } from "react"
import { User } from "oidc-client-ts";
import oauthReducer from "../api/oauth/oauth.reducer";

export type AuthState = {
    user?: User;
}
const useOauthReducer = () => {
    const INITIAL_STATE: AuthState = {
        user: undefined
    }
  return useReducer(oauthReducer, INITIAL_STATE)
}

export default useOauthReducer