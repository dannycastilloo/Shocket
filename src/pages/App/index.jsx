import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'

import Navbar from '../../components/Navbar'

import '../../App.css'

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/myorder', element: <MyOrder /> },
    { path: '/myorders', element: <MyOrders /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

const App = () => { 
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}

export default App