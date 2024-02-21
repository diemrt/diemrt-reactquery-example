import { useQuery } from "@tanstack/react-query";
import { createFetchPostsQuery } from "../../api/posts/posts.api";
import PostsWidget from "../../components/PostsWidget/PostsWidget.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import SidebarContent from "../../components/SidebarContent/SidebarContent.component";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle.component";
import WithSkeleton from "../../components/WithSkeleton/WithSkeleton.component";
import { PostsContext } from "./utils";

const Welcome = () => {
  
  const fetchPosts = createFetchPostsQuery()
  const { data, isPending } = useQuery(fetchPosts)
  const PostsWidgetWithSkeleton = WithSkeleton(PostsWidget)

  return (
    <PostsContext.Provider value={data}>
      <SidebarToggle />
      <Sidebar />
      <SidebarContent>
        <PostsWidgetWithSkeleton isLoading={isPending} />
      </SidebarContent>
    </PostsContext.Provider>
  );
};

export default Welcome;
