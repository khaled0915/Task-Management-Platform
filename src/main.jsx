import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './provider/AuthProvider';
import Dashboard from './Layout/Dashboard';

import AddTask from './Pages/Dashboard/AddTask/AddTask';
import AddedTask from './Pages/Dashboard/addedTask/addedTask';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      
      
      {

        path : '/' ,
        element : <Home></Home>

    },

    {
      path : '/contact' ,
      element : <Contact></Contact>
    },
    {
      path : '/login' ,
      element : <Login></Login>
    },
    {
      path : '/signUp' ,
      element : <SignUp></SignUp>
    }
  
  
  ]


  },
 
  {

    path : 'dashboard' , 
    element : <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes> ,
    errorElement : <ErrorPage></ErrorPage>,
    children : [


      {
        path : 'addTask' ,
        element : <AddTask></AddTask>
      },
      {
        path : 'addedTask',
        element :<AddedTask></AddedTask>
      
      }




    ]



  }






]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>


  <QueryClientProvider client={queryClient}>

  <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    
    
    
     </QueryClientProvider>


  </AuthProvider>
  </React.StrictMode>,
)
