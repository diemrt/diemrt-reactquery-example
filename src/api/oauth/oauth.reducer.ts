import { User } from "oidc-client-ts";
import { AuthState } from "../../hooks/useOauthReducerHook";
import { Action } from "../utils";

const oauthReducer = (state: AuthState, action: Action<User>) => {
    const { type, payload} = action
    switch(type){
        case 'success':
            return {
                ...state,
                user: payload
            }
        case 'invalidate': {
            return {
                ...state,
                user: undefined
            }
        }
        default:
            return state
    }
}
export default oauthReducer