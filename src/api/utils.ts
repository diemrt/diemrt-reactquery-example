import {
  MutationCache,
  QueryCache,
  QueryClient,
  queryOptions,
} from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { client } from "./oauth/oauth.utils";

const getRootUrl = () => {
  const cache: { [key: string]: string } = {};

  return (cacheKey: string) => {
    if (cacheKey in cache) {
      return cache[cacheKey];
    } else {
      const apiUrl = import.meta.env.VITE_API_DOMAIN ?? "";
      cache[cacheKey] = apiUrl;
      return apiUrl;
    }
  };
};
const rootUrl = getRootUrl();
export const getAPIUrl = (cacheKey = "apiUrl") => rootUrl(cacheKey);

export const queryData = <T>(
  url: string,
  accessToken: string | null = null,
  params: object | null = null
) => {
  const reqHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  return axios
    .get<T>(url, { headers: reqHeaders, params })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      if (error.response) {
        throw new Error(
          error.response.data.error?.message || error.response.data
        );
      } else if (error.request) {
        throw new Error(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const mutateData = <T>(
  url: string,
  accessToken: string | null,
  body: object | null,
  method: "POST" | "DELETE" | "PUT" | "PATCH"
) => {
  const reqHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  return axios<T>({
    headers: reqHeaders,
    method: method,
    url: url,
    data: body,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(
          error.response.data.erorr?.message || error.response.data
        );
      } else if (error.request) {
        throw new Error(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
};

export const apiQueryOptions = <T>({
  providesTags,
  url,
  enabled = true,
}: {
  providesTags: string[];
  url: () => string;
  enabled?: boolean;
}) => {
  return queryOptions({
    queryKey: providesTags,
    queryFn: () => {
      return new Promise<T>((resolve, reject) => {
        client.getUser()
          .then((user) => user?.id_token)
          .then((accessToken) =>
            queryData<T>(`${getAPIUrl()}${url()}`, accessToken)
          )
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      });
    },
    enabled: enabled,
    retry: 1,
  });
};

export const apiMutationOptions = <T>({
  invalidateTags,
  url,
  body = null,
  method,
}: {
  invalidateTags: string[];
  url: () => string;
  body?: object | null;
  method: "POST" | "DELETE" | "PUT" | "PATCH";
}) => {
  return {
    mutationFn: () => {
      return new Promise<T>((resolve, reject) => {
        client.getUser()
          .then((user) => user?.id_token)
          .then((accessToken) =>
            mutateData<T>(`${getAPIUrl()}${url()}`, accessToken, body, method)
          )
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: invalidateTags });
    },
  };
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) =>
      toast.warn(`Qualcosa è andato storto. ${err?.message || err}`),
  }),
  mutationCache: new MutationCache({
    onError: (err) =>
      toast.warn(`Qualcosa è andato storto. ${err?.message || err}`),
    onSuccess: () => toast.success("Operazione avvenuta con successo!"),
  }),
});
export default queryClient;
export type KeyValueItem = {
  [key: string]: string;
};
export type Action<T> = {
  type: string;
  payload?: T;
};
export type LoginFormFields = {
  email: string;
  password: string;
};
