import PostWidgetCard from "./PostWidgetCard/PostWidgetCard.component"

const PostsWidget = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <PostWidgetCard />
        </div>
    </div>
  )
}

export default PostsWidget