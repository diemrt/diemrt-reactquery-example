import PostsWidget from "../../components/PostsWidget/PostsWidget.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import SidebarContent from "../../components/SidebarContent/SidebarContent.component";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle.component";

const Welcome = () => {
  return (
    <>
      <SidebarToggle />
      <Sidebar />
      <SidebarContent>
        <PostsWidget />
      </SidebarContent>
    </>
  );
};

export default Welcome;
