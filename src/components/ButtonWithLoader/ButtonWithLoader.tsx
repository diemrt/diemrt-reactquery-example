import React from "react";

interface Props {
  isLoading?: boolean;
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
const ButtonWithLoader = ({ isLoading = false, children, type = "button", onClick = () => null }: Props) => {
  return (
    <>
      {isLoading ? (
        <button
          type="button"
          disabled
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
          type={type}
          onClick={onClick}
          className="py-3 px-4 flex justify-center items-center size-[46px] text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default ButtonWithLoader;
