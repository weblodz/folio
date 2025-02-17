import { Route, Routes } from 'react-router-dom'
import Home from '@pages/Home'
import SignIn from '@pages/Authentication/SignIn'
import SignUp from '@pages/Authentication/SignUp'
import Profile from '@pages/Authentication/Profile'
import routes from '../path'

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.withoutAuth.home} element={<Home />} />
      <Route path={routes.withoutAuth.signIn} element={<SignIn />} />
      <Route path={routes.withoutAuth.signUp} element={<SignUp />} />
      <Route path={routes.withAuth.profile} element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes
