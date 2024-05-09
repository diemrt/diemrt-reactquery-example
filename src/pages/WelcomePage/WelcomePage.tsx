import PostsWidget from "../../components/PostsWidget/PostsWidget";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarContent from "../../components/SidebarContent/SidebarContent";
import SidebarToggle from "../../components/SidebarToggle/SidebarToggle";
import Header from "../../components/Header/Header";

const WelcomePage = () => {
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

export default WelcomePage;
