import { queryOptions } from "@tanstack/react-query";
import {
  TranslateFirebaseErrors,
  auth,
  getCurrentUser,
  translateFirebaseErrorMessage,
  userSignOut,
} from "./firebase.utils";
import { LoginFormFields } from "./firebase.types";
import { signInWithEmailAndPassword } from "firebase/auth";
import queryClient from "../utils";

export const checkUserSessionQuery = () =>
  queryOptions({
    queryKey: ["userSession"],
    queryFn: async () => {
      const user = await getCurrentUser();
      if (user) {
        return { user: user };
      }
      return { user: undefined };
    },
  });
export const loginMutation = () => {
  return {
    mutationFn: async ({ email, password }: LoginFormFields) => {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (user) {
          return { user: user };
        }
      } catch (error) {
        const message = translateFirebaseErrorMessage(
          error as TranslateFirebaseErrors
        );
        return { error: message };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
export const logoutMutation = () => {
  return {
    mutationFn: async () => {
      await userSignOut();
      return null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
