import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper."
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import { getStoredUser } from "../../api/oauth/oauthUtils"
import PrivateRoute from "./PrivateRoute"
import NonePage from "../../pages/NonePage/NonePage"
import SigninCallbackPage from "../../pages/SigninCallbackPage/SigninCallbackPage"
import LandingPage from "../../pages/LandingPage/LandingPage"
const AppRouter = () => {  
  const isUserLoggedIn = getStoredUser() !== null
  return (
    <BrowserRouter>
        <ReinitializationHelper>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/signin-callback" element={<SigninCallbackPage />}/>
                <Route path="/none" element={
                  <PrivateRoute condition={isUserLoggedIn} redirectTo="/">
                    <NonePage />
                  </PrivateRoute>
                } />
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </ReinitializationHelper>
    </BrowserRouter>
  )
}

export default AppRouter