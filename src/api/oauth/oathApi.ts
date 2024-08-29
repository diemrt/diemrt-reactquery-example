import {
  ProcessResourceOwnerPasswordCredentialsArgs,
} from "oidc-client-ts";
import queryClient from "../utils";
import { AuthContextProps } from "react-oidc-context";

export const loginMutation = () => {
  return {
    mutationFn: ({
      auth,
      email,
      password,
    }: {
      auth: AuthContextProps;
      email: string;
      password: string;
    }) => {
      return new Promise((resolve, reject) => {
        auth
          .signinResourceOwnerCredentials({
            username: email,
            password: password,
          } as ProcessResourceOwnerPasswordCredentialsArgs)
          .then((res) => {
            if (res !== null) resolve(res);
            else reject();
          });
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },
  };
};
