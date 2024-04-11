import { FirebaseContext, FirebaseDispatchContext } from "../../../api/firebase/firebase.utils";
import useFirebaseReducer from "../../../api/firebase/hooks/useFirebaseReducer.hook";

interface Props {
    children: React.ReactNode,
}
const FirebaseReducer = ({
    children
}: Props) => {
    
  const [state, dispatch] = useFirebaseReducer();

  return (
    <FirebaseContext.Provider value={state}>
        <FirebaseDispatchContext.Provider value={dispatch}>
            {children}
        </FirebaseDispatchContext.Provider>
    </FirebaseContext.Provider>
  )

}

export default FirebaseReducer