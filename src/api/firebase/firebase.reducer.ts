import { FirebaseAction, FirebaseState } from "./firebase.utils";

const firebaseReducer = (state: FirebaseState, action: FirebaseAction) => {
    const { type, payload} = action
    switch(type){
        case 'success':
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}
export default firebaseReducer