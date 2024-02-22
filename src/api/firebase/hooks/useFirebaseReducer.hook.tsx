import { useReducer } from "react"
import firebaseReducer from "../firebase.reducer"
import { FirebaseState } from "../firebase.utils"


const useFirebaseReducer = () => {
    const INITIAL_STATE: FirebaseState = {
        user: undefined
    }
  return useReducer(firebaseReducer, INITIAL_STATE)
}

export default useFirebaseReducer