import ButtonWithLoader from "../ButtonWithLoader/ButtonWithLoader.component";
import PostWidgetCard from "./PostWidgetCard/PostWidgetCard.component";

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
              <div className="py-8 first:pt-0 last:pb-0">
                <div className="flex gap-x-5">
                  <span class="inline-flex h-fit items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    GET
                  </span>
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800 dark:text-gray-200">
                      /posts
                    </h3>
                    <p className="mt-1 text-gray-500">
                      Ottiene la lista dei post disponibili.
                    </p>
                    <div className="flex flex-row gap-5 mt-2">
                      <ButtonWithLoader />
                    </div>
                  </div>
                </div>
              </div>
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
