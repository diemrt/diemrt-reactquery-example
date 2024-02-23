import { QueryClient, queryOptions } from "@tanstack/react-query";
import axios from "axios";

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
  query,
}: {
  providesTags: string[];
  query: () => string;
}) => {
  return queryOptions({
    queryKey: providesTags,
    queryFn: () => queryData<T>(`${getAPIUrl()}${query()}`),
    retry: 1,
  });
};
export type ApiActionType = "success" | "loading" | "error" | "pending";
const queryClient = new QueryClient();
export default queryClient;
