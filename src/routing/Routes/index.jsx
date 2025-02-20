import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import SignIn from '@pages/Auth/SignIn'
import SignUp from '@pages/Auth/SignUp'
import Profile from '@pages/Auth/Profile'
import PrivateRoute from '@routing/PrivateRoute'
import routes from '../path'

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.withoutAuth.home} element={<Home />} />
      <Route path={routes.withoutAuth.signIn} element={<SignIn />} />
      <Route path={routes.withoutAuth.signUp} element={<SignUp />} />
      <Route element={<PrivateRoute />}>
        <Route path={routes.withAuth.profile} element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
