import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Root/Root.jsx';
import HomePage from './Pages/HomePage.jsx';
import Errorpage from './Components/Errorpage.jsx';
import AddCoffee from './Pages/AddCoffee.jsx';
import UpdateCoffee from './Pages/UpdateCoffe.jsx';
import LoginPage from './Auth/LoginPage.jsx';
import SignupPage from './Auth/SignupPage.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivetRout from './Privet/Privetrought.jsx';
import AllUsers from './Pages/AllUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000/coffees'),
        element: <HomePage></HomePage>
      },
      {
        path: "/addCoffee",
        element: <PrivetRout><AddCoffee></AddCoffee></PrivetRout>
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
        element: <PrivetRout><UpdateCoffee></UpdateCoffee></PrivetRout>
      },
      {
        path: "/Users",
        loader: () => fetch(`http://localhost:5000/users`),
        element: <PrivetRout><AllUsers></AllUsers></PrivetRout>
      },
    ]
  },
  {
    path: "login",
    errorElement: <Errorpage></Errorpage>,
    element: <LoginPage></LoginPage>
  },

  {
    path: "/signUp",
    errorElement: <Errorpage></Errorpage>,
    element: <SignupPage></SignupPage>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
