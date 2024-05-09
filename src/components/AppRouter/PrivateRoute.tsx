import { Navigate } from "react-router-dom"

type PrivateRouteProps = {
  children: JSX.Element
  redirectTo: string
  condition: boolean
}

const PrivateRoute = ({ children, redirectTo, condition }: PrivateRouteProps) => {
  return condition ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute