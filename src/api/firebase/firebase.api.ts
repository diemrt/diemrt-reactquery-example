import { queryOptions } from "@tanstack/react-query";
import { getCurrentUser } from "./firebase.utils";

export const checkUserSession = () =>
  queryOptions({
    queryKey: ["userSession"],
    queryFn: async () => {
      const user = await getCurrentUser();
      if (user) {
        return { data: { user } };
      }
      return { data: null };
    },
  });
