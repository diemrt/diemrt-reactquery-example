import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.component"
import NotFound from "../../pages/NotFound/NotFound.component"
import LoginOrNot from "../../pages/LoginOrNot/LoginOrNot"
const AppRouter = () => {
  return (
    <BrowserRouter>
        <ReinitializationHelper>
            <Routes>
                <Route path="/" element={<LoginOrNot />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </ReinitializationHelper>
    </BrowserRouter>
  )
}

export default AppRouter