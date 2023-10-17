import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Component/Home/Home.jsx';
import AddCoffe from './Component/AddCoffe/AddCoffe.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Login from './Component/Login/Login.jsx';
import PrivateRoute from './PrivateRoute/PrivateRute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
       {
          path:"/",
          element:<Home></Home>
       },
       {
        path:"/add-coffee",
        element:<PrivateRoute><AddCoffe></AddCoffe></PrivateRoute>
       },
       {
        path:"/login",
        element:<Login></Login>
       }

    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
