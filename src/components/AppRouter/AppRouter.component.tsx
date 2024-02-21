import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "../../pages/Welcome/Welcome.page"
const AppRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter