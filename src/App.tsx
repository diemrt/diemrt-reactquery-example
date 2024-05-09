import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppRouter from "./components/AppRouter/AppRouter";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
