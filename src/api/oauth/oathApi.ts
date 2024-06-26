import { ProcessResourceOwnerPasswordCredentialsArgs } from "oidc-client-ts";
import queryClient from "../utils";

export const loginMutation = () => {
  return {
    mutationFn: ({ callback, email, password }: { callback: any, email: string; password: string }) => {
      return new Promise(() => {
        callback({
            username: email,
            password: password
          } as ProcessResourceOwnerPasswordCredentialsArgs)
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
