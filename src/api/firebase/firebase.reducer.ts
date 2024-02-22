import { FirebaseAction, FirebaseActionKind, FirebaseState } from "./firebase.utils";

const firebaseReducer = (state: FirebaseState, action: FirebaseAction) => {
    const { type, payload} = action
    switch(type){
        case FirebaseActionKind.SUCCEEDED:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}
export default firebaseReducer