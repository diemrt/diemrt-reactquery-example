import { queryOptions } from "@tanstack/react-query";
import { auth, getCurrentUser, translateFirebaseErrorMessage, userSignOut } from "./firebase.utils";
import { LoginFormFields } from "./firebase.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import queryClient from "../utils";

export const checkUserSessionQuery = () =>
  queryOptions({
    queryKey: ["userSession"],
    queryFn: () => {
      return new Promise((resolve, reject) => {
        getCurrentUser()
          .then((user) => {
            if (user) {
              resolve({ user: user });
            } else {
              resolve({ user: undefined });
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  });
export const loginMutation = () => {
  return {
    mutationFn: ({ email, password }: LoginFormFields) => {
      return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
            if (user) {
              resolve({ user: user });
            } else {
              reject("No user found");
            }
          })
          .catch((error) => {
            const translatedError = translateFirebaseErrorMessage(error)
            reject(translatedError);
          });
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
export const logoutMutation = () => {
  return {
    mutationFn: userSignOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
