import PostsWidget from "../../components/PostsWidget/PostsWidget.component";
import Sidebar from "../../components/Sidebar/Sidebar.component";
import SidebarContent from "../../components/SidebarContent/SidebarContent.component";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle.component";
import Header from "../../components/Header/Header.component";

const Welcome = () => {
  return (
    <>
      <Header />
      <SidebarToggle />
      <Sidebar />
      <SidebarContent>
        <PostsWidget />
      </SidebarContent>
    </>
  );
};

export default Welcome;
