import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "../../pages/Welcome/Welcome.page"
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.component"
import NotFound from "../../pages/NotFound/NotFound.component"
import { useContext } from "react"
import Login from "../../pages/Login/Login.page"
import { OauthContext } from "../../api/oauth/oauth.utils"
const AppRouter = () => {
  const state = useContext(OauthContext)
  const isUserLoggedIn = state?.user ? true : false
  return (
    <BrowserRouter>
        <ReinitializationHelper>
            <Routes>
                <Route path="/" element={<>{isUserLoggedIn ? <Welcome /> : <Login />}</>}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </ReinitializationHelper>
    </BrowserRouter>
  )
}

export default AppRouter