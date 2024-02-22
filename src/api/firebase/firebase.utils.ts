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
export type TranslateFirebaseErrors = {
  code?: "auth/too-many-requests" | "auth/wrong-password";
  message?: string;
};
export declare type FetchBaseQueryError =
  | {
      /**
       * * `number`:
       *   HTTP status code
       */
      status: number;
      data: unknown;
    }
  | {
      /**
       * * `"FETCH_ERROR"`:
       *   An error that occurred during execution of `fetch` or the `fetchFn` callback option
       **/
      status: "FETCH_ERROR";
      data?: undefined;
      error: string;
    }
  | {
      /**
       * * `"PARSING_ERROR"`:
       *   An error happened during parsing.
       *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",
       *   or an error occurred while executing a custom `responseHandler`.
       **/
      status: "PARSING_ERROR";
      originalStatus: number;
      data: string;
      error: string;
    }
  | {
      /**
       * * `"TIMEOUT_ERROR"`:
       *   Request timed out
       **/
      status: "TIMEOUT_ERROR";
      data?: undefined;
      error: string;
    }
  | {
      /**
       * * `"CUSTOM_ERROR"`:
       *   A custom error type that you can return from your `queryFn` where another error might not make sense.
       **/
      status: "CUSTOM_ERROR";
      data?: unknown;
      error: string;
    };
export const translateFirebaseErrorMessage = (
  error: TranslateFirebaseErrors
): FetchBaseQueryError => {
  if (error.code) {
    return {
      status: 400,
      data: {
        error: {
          message: FirebaseErrorMessagesIt[error.code],
        },
      },
    };
  }

  if (error.message) {
    return {
      status: 400,
      data: {
        error: {
          message: error.message,
        },
      },
    };
  }

  return {
    status: 400,
    data: {
      error: {
        message: "Si è verificato un problema!",
      },
    },
  };
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
