import GetAllCard from "./cards/GetAllCard.component";

const PostsWidget = () => {
  return (
    <>
      {/* FAQ */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Posts API
              </h2>
              <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
                Le funzionalità CRUD dell'api per la gestione dei post del blog.
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="md:col-span-3">
            {/* Accordion */}
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
              <GetAllCard />
            </div>
            {/* End Accordion */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End FAQ */}
    </>
  );
};

export default PostsWidget;
