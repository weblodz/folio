import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  let auth = {'token': true}

  return (
    auth.token ? <Outlet/> : <Navigate to='/sign-in'/>
  )
}

export default PrivateRoute
