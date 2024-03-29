import { useQuery } from "@tanstack/react-query";
import { fetchPostsQuery } from "../../api/posts/posts.api";
import PostsWidget from "../../components/PostsWidget/PostsWidget.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import SidebarContent from "../../components/SidebarContent/SidebarContent.component";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle.component";
import WithSkeleton from "../../components/WithSkeleton/WithSkeleton.component";
import { PostsContext } from "./utils";
import Header from "../../components/Header/Header.component";

const Welcome = () => {
  
  const fetchPostsQueryOptions = fetchPostsQuery()
  const { data, isPending } = useQuery(fetchPostsQueryOptions)
  const PostsWidgetWithSkeleton = WithSkeleton(PostsWidget)

  return (
    <PostsContext.Provider value={data}>
      <Header />
      <SidebarToggle />
      <Sidebar />
      <SidebarContent>
        <PostsWidgetWithSkeleton isLoading={isPending} />
      </SidebarContent>
    </PostsContext.Provider>
  );
};

export default Welcome;
