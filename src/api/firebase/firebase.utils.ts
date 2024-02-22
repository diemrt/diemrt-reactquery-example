import { initializeApp } from "firebase/app";
import {
  User,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import { ApiActionType } from "../utils";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
export const FirebaseErrorMessagesIt = {
  "auth/user-not-found": "La mail inserita non è autorizzata ad accedere",
  "auth/too-many-requests":
    "L'accesso a questo account è stato temporaneamente disabilitato a causa di troppi tentativi falliti di login. Puoi ripristinarlo immediatamente reimpostando la password o puoi provare nuovamente più tardi.",
  "auth/wrong-password": "La password inserita non è valida.",
};
const app = initializeApp(config);
export const auth = getAuth(app);
export const signIn = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export const userSignOut = () => signOut(auth);
export const getCurrentUser = () => {
  return new Promise<User>((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth!);
      },
      reject
    );
  });
};
export const resetUserPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};
export interface FirebaseState {
  user?: User;
}
export interface FirebaseAction {
  type: ApiActionType;
  payload?: User;
}
export const FirebaseContext = createContext<FirebaseState | undefined>(
  undefined
);
export const FirebaseDispatchContext = createContext<
  React.Dispatch<FirebaseAction> | undefined
>(undefined);
