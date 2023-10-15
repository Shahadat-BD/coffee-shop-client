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
        element:<AddCoffe></AddCoffe>
       },

    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
