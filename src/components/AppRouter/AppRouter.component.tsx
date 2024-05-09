import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.component"
import NotFound from "../../pages/NotFound/NotFound.component"
import LoginOrNot from "../../pages/LoginOrNot/LoginOrNot"
import { getStoredUser } from "../../api/oauth/oauth.utils"
import PrivateRoute from "./PrivateRoute.component"
import NonePage from "../../pages/NonePage/NonePage"
const AppRouter = () => {  
  const isUserLoggedIn = getStoredUser() !== null
  return (
    <BrowserRouter>
        <ReinitializationHelper>
            <Routes>
                <Route path="/" element={<LoginOrNot />}/>
                <Route path="/none" element={
                  <PrivateRoute condition={isUserLoggedIn} redirectTo="/">
                    <NonePage />
                  </PrivateRoute>
                } />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </ReinitializationHelper>
    </BrowserRouter>
  )
}

export default AppRouter