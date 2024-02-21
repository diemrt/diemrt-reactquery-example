interface Props {
  isLoading: boolean;
}
const WithFullScreenSkeleton = (WrappedComponent: React.ElementType) => {
  const FullScreenSkeletonLoader = ({ isLoading, ...otherProps }: Props) => {
    return isLoading ? (
      <div className="dark:bg-slate-900 flex h-full items-center py-16">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="flex animate-pulse">
            <div className="ms-4 mt-2 w-full">
              <h3
                className="h-4 bg-gray-200 rounded-full dark:bg-gray-700"
                style={{ width: "40%" }}
              />
              <ul className="mt-5 space-y-3">
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
                <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
              </ul>
            </div>
          </div>
        </main>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return FullScreenSkeletonLoader
};

export default WithFullScreenSkeleton;
