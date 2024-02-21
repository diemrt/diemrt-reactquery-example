interface Props {
  isLoading: boolean;
}
const WithSkeleton = (WrappedComponent: React.ElementType) => {
  const SkeletonLoader = ({ isLoading, ...otherProps }: Props) => {
    return isLoading ? (
      <div className="flex animate-pulse">
        <div className="flex-shrink-0">
          <span className="size-12 block bg-gray-200 rounded-full dark:bg-gray-700" />
        </div>
        <div className="ms-4 mt-2 w-full">
          <ul className="mt-5 space-y-3">
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
            <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
          </ul>
        </div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return SkeletonLoader;
};

export default WithSkeleton;
