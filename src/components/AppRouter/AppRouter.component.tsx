import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "../../pages/Welcome/Welcome.page"
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.component"
import NotFound from "../../pages/NotFound/NotFound.component"
const AppRouter = () => {

  return (
    <BrowserRouter>
        <ReinitializationHelper>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </ReinitializationHelper>
    </BrowserRouter>
  )
}

export default AppRouter