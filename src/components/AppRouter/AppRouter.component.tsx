import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "../../pages/Welcome/Welcome.page"
import ReinitializationHelper from "../ReinitializationHelper/ReinitializationHelper.component"
import NotFound from "../../pages/NotFound/NotFound.component"
import { useContext } from "react"
import { FirebaseContext } from "../../api/firebase/firebase.utils"
import Login from "../../pages/Login/Login.page"
const AppRouter = () => {
  const state = useContext(FirebaseContext)
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