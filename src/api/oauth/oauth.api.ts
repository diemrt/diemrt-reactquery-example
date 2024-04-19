import { queryOptions } from "@tanstack/react-query";
import { client } from "./oauth.utils";
import queryClient from "../utils";

export const loginMutation = () => {
  return {
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return new Promise((resolve, reject) => {
        client
          .signinResourceOwnerCredentials({
            username: email,
            password: password,
          })
          .then((user) => {
            if (user) {
              client.storeUser(user);
              resolve({ user: user });
            } else {
              reject("No user found");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
export const checkUserSessionQuery = () =>
  queryOptions({
    queryKey: ["userSession"],
    queryFn: () => {
      return new Promise((resolve, reject) => {
        client
          .getUser()
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
  export const logoutMutation = () => {
    return {
      mutationFn: () => {
        return new Promise((resolve, reject) => {
          client
            .removeUser()
            .then(() => resolve(undefined))
            .catch((error) => {
              reject(error);
            });
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["userSession"] });
      },
    };
  };
