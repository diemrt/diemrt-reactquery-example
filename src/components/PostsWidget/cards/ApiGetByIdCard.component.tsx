import { useQuery } from "@tanstack/react-query";
import { readPostQuery } from "../../../api/posts/posts.api";
import ButtonWithLoader from "../../ButtonWithLoader/ButtonWithLoader";
import moment from "moment";

const ApiGetByIdCard = () => {
  const postId = "1"
  const fetchPostQueryOptions = readPostQuery({id: postId});
  const { data, isLoading, refetch, dataUpdatedAt } = useQuery(
    fetchPostQueryOptions
  );

  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <span className="inline-flex h-fit items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          GET
        </span>
        <div className="w-full">
          <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
            /posts/:postId
          </h3>
          <p className="mt-1 w-full text-gray-500">
            Ottiene il dettaglio di un singolo post.
          </p>
          <div className="w-full mt-5">
            {data && (
              <>
                <div>
                  <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                    <svg
                      className="flex-shrink-0 size-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    {moment(dataUpdatedAt).format()}
                  </span>
                </div>
                <textarea
                  id="textarea-label"
                  className="py-3 px-4 mt-3 block w-full bg-green-50 border-green-600 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  rows={3}
                  placeholder="Risposta"
                  value={JSON.stringify(data)}
                />
              </>
            )}
          </div>
          <div className="flex flex-row gap-5 mt-5">
            <ButtonWithLoader onClick={refetch} isLoading={isLoading}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>
            </ButtonWithLoader>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiGetByIdCard;
