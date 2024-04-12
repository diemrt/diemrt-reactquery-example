interface Props {
  isLoading?: boolean;
}
const ButtonWithLoader = ({ isLoading = false }: Props) => {
  return (
    <>
      {isLoading ? (
        <button
          type="button"
          className="flex justify-center items-center size-[46px] text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
        >
          <span
            className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </span>
        </button>
      ) : (
        <button
          type="button"
          className="py-3 px-4 flex justify-center items-center size-[46px] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <svg
            className="flex-shrink-0 size-4"
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
            <path d="m5 11 4-7" />
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
            <path d="m9 11 1 9" />
            <path d="M4.5 15.5h15" />
            <path d="m15 11-1 9" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ButtonWithLoader;
